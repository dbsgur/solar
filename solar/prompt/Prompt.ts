import readline from "readline";
import colors from "colors/safe";
import { PackageBuilder, Selection, TextInput } from "./";
import { IQuestionInfo, questionType } from "../types/Prompt";

export class Prompt {
  private r: readline.Interface;
  private questions: IQuestionInfo[];
  private answers: Record<string, string> = {};
  private packageBuilder: PackageBuilder;

  constructor() {
    this.r = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    this.r.on("close", () => {
      process.exit();
    });
    this.packageBuilder = new PackageBuilder();
  }

  setQuestions(questions: IQuestionInfo[]): this {
    this.questions = questions;
    return this;
  }

  // prettier-ignore
  logIntro() {
    console.log(colors.cyan(`@@@@@@@@@@@@#@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@$-$@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@- -@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@ :@@@@@@@@@@@@@: @@@@`))
    console.log(colors.cyan(`@@@@:-#@@!;;;;;!@@#- @@@@`))
    console.log(colors.cyan(`@@@@@#@#,   :$$,,#@#;@@@@`))
    console.log(colors.cyan(`@@@@@@#        *: #@@@@@@`))
    console.log(colors.cyan(`@@@@@@,         ::,@@@@@@`))
    console.log(colors.cyan(`@@@@@!           *,!@@@@@`))
    console.log(colors.cyan(`@@@@@;            $;@@@@@`))
    console.log(colors.cyan(`@$-@@;            $;@@-$@`))
    console.log(colors.cyan(`#- @;-   SOLAR    :;@@ -#`))
    console.log(colors.cyan(`@$-@               ;@@-$@`))
    console.log(colors.cyan(`@@@@@;             ;@@@@@`))
    console.log(colors.cyan(`@@@@@~             !@@@@@`))
    console.log(colors.cyan(`@@@@@             ,@@@@@@`))
    console.log(colors.cyan(`@@@@@@            #@@@@@@`))
    console.log(colors.cyan(`@@@@@#@#,       ,#@#@@@@@`))
    console.log(colors.cyan(`@@@@:-#@@!;;;;;!@@#-:@@@@`))
    console.log(colors.cyan(`@@@@ :@@@@@@@@@@@@@: @@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@- -@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@$-$@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@#@@@@@@@@@@@@\n`))
  }

  // prettier-ignore
  logOutro() {
    console.log(colors.bgRed("\n\n/********************************************/"));
    console.log(colors.bgRed("   프로젝트 설정이 끝났습니다.🌞     "));
    console.log(colors.bgRed("       다음과 같은 명령어를 입력해주세요.     "));
    console.log(colors.bgRed(`           cd apps/프로젝트 이름          `));
    console.log(colors.bgRed(`                  yarn                        `));
    console.log(colors.bgRed(`                yarn serve                    `));
    console.log(colors.bgRed("/********************************************/\n\n"));
  }

  private getInput(index: number, resolve: (value: string) => void): void {
    new TextInput(this.questions[index], resolve).start(this.r);
  }

  private getChoices(index: number, resolve: (value: string) => void): void {
    new Selection(this.questions[index], resolve).start();
  }

  private async getInputByType(index: number): Promise<string> {
    const type: questionType = this.questions[index].type;
    const table: {
      // @ts-ignore
      [key in questionType]: (
        index: number,
        resolve: (value: string) => void
      ) => void;
    } = {
      input: (index, resolve) => this.getInput(index, resolve),
      list: (index, resolve) => this.getChoices(index, resolve),
    };

    return await new Promise((resolve) => {
      // @ts-ignore
      table[type](index, resolve);
    });
  }

  async start(): Promise<void> {
    this.logIntro();
    let i = 0;
    while (true) {
      if (!this.questions[i]) break;
      else this.answers[this.questions[i].key] = await this.getInputByType(i);
      i++;
    }
    await this.packageBuilder.build(this.answers);
    this.logOutro();
    this.r.close();
  }
}
