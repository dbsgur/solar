import fsExtra from "fs-extra";
import fs from "fs";
import path from "path";
import { ProgressBar } from "./index";

export class PackageBuilder {
  current: number = 0;
  progressBar: ProgressBar;

  constructor() {
    this.progressBar = new ProgressBar();
  }

  async endLoading(): Promise<void> {
    if (this.current >= 100) return;
    for (let i = this.current + 10; i < 100; i += 10) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          this.current = i;
          this.progressBar.update(this.current);
          resolve();
        }, 100);
      });
    }
    this.current = 100;
    this.progressBar.update(100);
  }

  loading(): void {
    this.current = this.current >= 100 ? this.current : this.current + 10;
    this.progressBar.update(this.current);
  }

  async build(answers: Record<string, string>): Promise<void> {
    const data: Record<
      string,
      (answers: Record<string, string>) => Promise<void>
    > = {
      SSR: async (answers) => this.createTemplate("ssr", answers),
      CSR: async (answers) => this.createTemplate("csr", answers),
    };
    await data[answers.renderType](answers);
  }

  async copyDir(templateFolderName: string, name: string): Promise<void> {
    const src = path.resolve(__dirname, `../template/${templateFolderName}`);
    const dest = path.resolve(__dirname, `../../services/${name}`);
    await new Promise<void>((resolve) => {
      fsExtra.copy(src, dest).then(() => resolve());
    });
  }

  async changeWord(
    destFilePath: string,
    func: (data: string) => string,
    data: string
  ): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      fs.writeFile(destFilePath, func(data), "utf-8", (err) => {
        if (err) reject(err);
        else resolve();
      });
    });
  }

  async changeFile(
    destFilePath: string,
    changeFunc: (data: string) => string
  ): Promise<void> {
    await new Promise<void>((resolve, reject) => {
      fs.readFile(destFilePath, "utf-8", async (err, data) => {
        if (err) reject(err);
        await this.changeWord(destFilePath, changeFunc, data);
        resolve();
      });
    });
  }

  async changePackageJsonFile(name: string, version: string): Promise<void> {
    const destinationPackageJson = path.resolve(
      __dirname,
      `../../services/${name}/package.json`
    );
    await this.changeFile(destinationPackageJson, (data) =>
      data.replace(/1name1/g, name)
    );
    await this.changeFile(destinationPackageJson, (data) =>
      data.replace(/1version1/g, version)
    );
  }

  async changeReadmeName(name: string): Promise<void> {
    const destinationReadme = path.resolve(
      __dirname,
      `../../services/${name}/README.md`
    );
    await this.changeFile(destinationReadme, (data) =>
      data.replace(/1name1/g, name.toUpperCase())
    );
  }

  async createTemplate(
    templateFolderName: string,
    answers: Record<string, string>
  ): Promise<void> {
    this.progressBar.init();
    const { name, version } = answers;

    // copy ssr template to services
    await this.copyDir(templateFolderName, name);

    // change package.json package name and version
    this.loading();
    await this.changePackageJsonFile(name, version);

    // change name in plugin/i18n
    this.loading();

    // change name in README.md
    this.loading();
    await this.changeReadmeName(name);

    await this.endLoading();
  }
}
