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
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@@@$$@@@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@@#,,#@@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@@:  :@@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@=    =@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@*.--.=@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@@####@@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@#***$@@@@@@@@@@@@@@@@@@@@@@@@$***#@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@*   ,#@@@@@@@@@@@@@@@@@@@@@@#,   *@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@*   ;@@@@@@@@@*.  .*@@@@@@@@@;   *@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@*  :@@@@@@$;     .    ;$@@@@@@:    @@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@$,;@@@@@$;      :=!;;-  ;$@@@@@;   @@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@#@@@@@=.       ,,~#@#$. .=@@@@@! @@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@#              -@@:  #@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@=                 !@=. =@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@$.                  :@= .$@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@;                    :@: ;@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@$                      !@. $@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@;                       @$ ;@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@                        -#- @@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@                         @; @@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@==@@@@*                         #; *@@@@*=@@@@`))
    console.log(colors.cyan(`@@#: .#@@@.                         ~! .@@@#. :#@@`))
    console.log(colors.cyan(`@$,  -#@@@            SOLAR         ,=. @@@#-  ,$@`))
    console.log(colors.cyan(`@$,  -#@@#                          ,:  @@@#-  ,$@`))
    console.log(colors.cyan(`@@#: .#@@                              .@@@#. :#@@`))
    console.log(colors.cyan(`@@@@==@@@                              *@@@@==@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@,                            @@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@                            @@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@;                          ;@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@$                          $@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@                          ;@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@                         .$@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@                        =@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@#                    #@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@#@@@@@=.                .=@@@@@#@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@$,;@@@@@$;              ;$@@@@@;,$@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@*  :@@@@@@$;          ;$@@@@@@:  *@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@*   ;@@@@@@@@@*.  .*@@@@@@@@@;   *@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@*   ,#@@@@@@@@@@@@@@@@@@@@@@#,   *@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@#***$@@@@@@@@@@@@@@@@@@@@@@@@$***#@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@@####@@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@=.--.*@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@=    =@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@@:  :@@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@@#,,#@@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@@@$$@@@@@@@@@@@@@@@@@@@@@@@@`))
    console.log(colors.cyan(`@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n`))
  }

  // prettier-ignore
  logOutro() {
    console.log(colors.red("\n\n/********************************************/"));
    console.log(colors.red("   Project setup is done. 🌞     "));
    console.log(colors.red("       Please read README.md file. 😁    "));
    console.log(colors.red(`           cd apps/프로젝트 이름          `));
    console.log(colors.red("/********************************************/\n\n"));
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
      [key in questionType]: (
        index: number,
        resolve: (value: string) => void
      ) => void;
    } = {
      input: (index, resolve) => this.getInput(index, resolve),
      list: (index, resolve) => this.getChoices(index, resolve),
    };

    return await new Promise((resolve) => {
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
