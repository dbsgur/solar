import fsExtra from "fs-extra";
import fs from "fs";
import path from "path";
// import ProgressBar from './ProgressBar'

// class PackageBuilder {
//   /** @type {number} */
//   current = 0;
//   progressBar;

//   constructor() {
//     this.progressBar = new ProgressBar();
//     return this;
//   }

//   async endLoading() {
//     if (this.current >= 100) return;
//     for (let i = this.current + 10; i < 100; i += 10) {
//       await new Promise((resolve) => {
//         setTimeout(() => {
//           this.current = i;
//           this.progressBar.update(this.current);
//           resolve();
//         }, 100);
//       });
//     }
//     this.current = 100;
//     this.progressBar.update(100);
//   }

//   loading() {
//     this.current = this.current >= 100 ? this.current : this.current + 10;
//     this.progressBar.update(this.current);
//   }

//   /**
//    * @param {Object.<string, string>} answers
//    */
//   async build(answers) {
//     const data = {
//       SSR: (answers) => this.createTemplate("ssr", answers),
//       CSR: (answers) => this.createTemplate("csr", answers),
//     };
//     await data[answers.renderType](answers);
//   }

//   /**
//    * @param {string} templateFolderName
//    * @param {string} name
//    */
//   async copyDir(templateFolderName, name) {
//     const src = path.resolve(__dirname, `../template/${templateFolderName}`);
//     const dest = path.resolve(__dirname, `../../services/${name}`);
//     await new Promise((resolve) => {
//       fsExtra.copy(src, dest).then((_) => resolve());
//     });
//   }

//   async changeWord(destFilePath, func, data) {
//     await new Promise((resolve, reject) => {
//       fs.writeFile(destFilePath, func(data), "utf-8", (err) => {
//         if (err) reject(err);
//         else resolve();
//       });
//     });
//   }

//   async changeFile(destFilePath, changeFunc) {
//     await new Promise((resolve, reject) => {
//       fs.readFile(destFilePath, "utf-8", async (err, data) => {
//         if (err) reject(err);
//         await this.changeWord(destFilePath, changeFunc, data);
//         resolve();
//       });
//     });
//   }

//   async changePackageJsonFile(name, version) {
//     const destinationPackageJson = path.resolve(
//       __dirname,
//       `../../services/${name}/package.json`
//     );
//     await this.changeFile(destinationPackageJson, (data) =>
//       data.replace(/1name1/g, name)
//     );
//     await this.changeFile(destinationPackageJson, (data) =>
//       data.replace(/1version1/g, version)
//     );
//   }

//   async changeReadmeName(name) {
//     const destinationReadme = path.resolve(
//       __dirname,
//       `../../services/${name}/README.md`
//     );
//     await this.changeFile(destinationReadme, (data) =>
//       data.replace(/1name1/g, name.toUpperCase())
//     );
//   }

//   async createTemplate(templateFolderName, answers) {
//     this.progressBar.init(100);
//     const { name, version } = answers;

//     // copy ssr template to services
//     await this.copyDir(templateFolderName, name);

//     // change package.json package name and version
//     this.loading();
//     await this.changePackageJsonFile(name, version);

//     // change name in plugin/i18n
//     this.loading();

//     // change name in README.md
//     this.loading();
//     await this.changeReadmeName(name);

//     await this.endLoading();
//   }
// }

// module.exports = PackageBuilder;
