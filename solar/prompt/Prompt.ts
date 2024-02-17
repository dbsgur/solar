// const PackageBuilder = require("./PackageBuilder");
// const Selection = require("./Selection");
// const TextInput = require("./TextInput");
import readliene from "readline";
import colors from "colors/safe";

// class Prompt {
//   r;
//   /** @type {IQuestionInfo[]}  */
//   questions;
//   /** @type {Object.<string, string>} */
//   answers = {};
//   packageBuilder;

//   constructor() {
//     this.r = readline.createInterface({
//       input: process.stdin,
//       output: process.stdout,
//     });
//     this.r.on("close", () => {
//       process.exit();
//     });
//     this.packageBuilder = new PackageBuilder();
//     return this;
//   }

//   setQuestions(questions) {
//     this.questions = questions;
//     return this;
//   }

//   logIntro() {
//     console.log(
//       colors.cyan(
//         `0OOOOOOOOOOOOOOO @@         Z - S H E R L O K        @@ OOOOOOOOOOOOOOOO00`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOOOOOOOOOOOO @@                                    @@ OOOOOOOOOOOOOOOO`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOOOOOO'''''' @@                                    @@ ''''''''''OOOOOO`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOO'' aaa@@@@@@@@@@@@@@@@@@@@"""                   """""""""@@aaaa 'OOOO`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOO,""""@@@@@@@@@@@@@@""""                                     a@"" OOOA`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOOOOOoooooo,                                            |OOoooooOOOOOS`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOOOOOOOOOOOOo,                                          |OOOOOOOOOOOOC`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOOOOOOOOOOOOOO                                         ,|OOOOOOOOOOOOI`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOOOOOOOOOOOOOO @                                        |OOOOOOOOOOOOO`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOOOOOOOOOOOOO'@                                         OOOOOOOOOOOOOO`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOOOOOOOOOOO'a'                                          |OOOOOOOOOOOOO`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOOOOOOOOOO''                                            aa'OOOOOOOOOOO`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOOOOOOOOOOb,..                                         )@aa''OOOOOOOh0`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOOOOOOOOOOOOOOo                                           )@@@aa OOOO0`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOOOOOOOOOOOOOOO|                                            @@@ OOOO00`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOOOOOOOOOOOOOOO@                        aaa@@@@@@@@""        @@ OOOOO0`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOO aaaa@"""""""" ""            @@@@@@@@@@@@""               @@@|'OOOO0`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOOOo'@@a                  aa@@  @@@@@@@""         a@        @@@@ OOOO0`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOOOOO'  '@@a               @@a@@   @@""           a@@   a     |@@@ OOOO0`
//       )
//     );
//     console.log(
//       colors.cyan(
//         `OOOO2       '@    aa@@       aaa"""          @a        a@     a@@@d,OOOO00\n`
//       )
//     );
//   }

//   logOutro() {
//     console.log(
//       colors.bgRed("\n\n/********************************************/")
//     );
//     console.log(colors.bgRed("   프로젝트 설정이 끝났습니다.🎉     "));
//     console.log(colors.bgRed("       다음과 같은 명령어를 입력해주세요.     "));
//     console.log(colors.bgRed(`           cd services/프로젝트 이름          `));
//     console.log(colors.bgRed(`                  yarn                        `));
//     console.log(colors.bgRed(`                yarn serve                    `));
//     console.log(
//       colors.bgRed("/********************************************/\n\n")
//     );
//   }

//   getInput(index, resolve) {
//     new TextInput(this.questions[index], resolve).start(this.r);
//   }

//   getChoices(index, resolve) {
//     new Selection(this.questions[index], resolve).start();
//   }

//   async getInputByType(index) {
//     const table = {
//       input: (index, resolve) => this.getInput(index, resolve),
//       list: (index, resolve) => this.getChoices(index, resolve),
//     };
//     return await new Promise((resolve) => {
//       table[this.questions[index].type](index, resolve);
//     });
//   }

//   async start() {
//     this.logIntro();
//     let i = 0;
//     while (true) {
//       if (!this.questions[i]) break;
//       else this.answers[this.questions[i].key] = await this.getInputByType(i);
//       i++;
//     }
//     await this.packageBuilder.build(this.answers);
//     this.logOutro();
//     this.r.close();
//   }
// }

// module.exports = Prompt;
