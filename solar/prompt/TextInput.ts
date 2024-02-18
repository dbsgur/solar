import colors from "colors/safe";
import { ReadLine } from "readline";
import { IQuestionInfo } from "../types/Prompt";

export class TextInput {
  questionInfo: IQuestionInfo;
  resolve: (value: string) => void;

  private get question(): string {
    return this.questionInfo.question;
  }

  private get required(): boolean {
    return this.questionInfo.required || false;
  }

  constructor(questionInfo: IQuestionInfo, resolve: (value: string) => void) {
    this.questionInfo = questionInfo;
    this.resolve = resolve;
  }

  private writeError(str: string): void {
    process.stdout.write(colors.red(`Error: ${str}\n`));
  }

  private validate(answer: string): boolean {
    if (this.required && !answer) {
      this.writeError("🚨 값을 채워넣어 주세요");
      return false;
    } else if (
      this.questionInfo.validation &&
      !RegExp(this.questionInfo.validation).test(answer)
    ) {
      if (this.questionInfo.default && !answer) return true;
      this.writeError(`🚨 ${this.questionInfo.errMsg}`);
      return false;
    } else return true;
  }

  start(r: ReadLine): void {
    r.question(`🎩 ${colors.green(this.question)}`, (answer: string) => {
      if (!this.validate(answer)) this.start(r);
      else this.resolve(this.questionInfo.default || answer);
    });
  }
}
