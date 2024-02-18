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

  private async endLoading(): Promise<void> {
    if (this.current >= 100) return;
    for (let index = this.current + 10; index < 100; index += 10) {
      await new Promise<void>((resolve) => {
        setTimeout(() => {
          this.current = index;
          this.progressBar.update(this.current);
          resolve();
        }, 100);
      });
    }
    this.current = 100;
    this.progressBar.update(100);
  }

  private loading(): void {
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
      SERVER: async (answers) => this.createTemplate("server", answers),
    };
    await data[answers.renderType](answers);
  }

  async copyDir(templateFolderName: string, name: string): Promise<void> {
    const src = path.resolve(__dirname, `../template/${templateFolderName}`);
    const dest = path.resolve(__dirname, `../../apps/${name}`);
    await new Promise<void>((resolve) => {
      fsExtra.copy(src, dest).then(() => resolve());
    });
  }

  private async changeWord(
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

  // NOTE: 파일을 읽어서 내용을 변경하고 다시 쓰는 함수입니다.
  private async changeFile(
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

  // NOTE: package.json 파일을 읽어서 name과 version을 변경합니다.
  private async changePackageJsonFile(
    name: string,
    version: string
  ): Promise<void> {
    const destinationPackageJson = path.resolve(
      __dirname,
      `../../apps/${name}/package.json`
    );
    await this.changeFile(destinationPackageJson, (data) =>
      data.replace(/1name1/g, name)
    );
    await this.changeFile(destinationPackageJson, (data) =>
      data.replace(/1version1/g, version)
    );
  }

  // NOTE: README.md 파일을 읽어서 name을 변경합니다.
  private async changeReadmeName(name: string): Promise<void> {
    const destinationReadme = path.resolve(
      __dirname,
      `../../apps/${name}/README.md`
    );
    await this.changeFile(destinationReadme, (data) =>
      data.replace(/1name1/g, name.toUpperCase())
    );
  }

  // NOTE: 사용자가 선택한 템플릿을 복사하고 package.json, README.md 파일을 변경합니다.
  private async createTemplate(
    templateFolderName: string,
    answers: Record<string, string>
  ): Promise<void> {
    this.progressBar.init();
    const { name, version } = answers;

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
