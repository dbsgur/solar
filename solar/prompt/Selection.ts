import { stdout, stdin } from "process";
import colors from "colors/safe";
import { IQuestionInfo } from "../types/Prompt";

export class Selection {
  resolve: (choice: string) => void;
  questionInfo: IQuestionInfo;
  y: number;

  constructor(questionInfo: IQuestionInfo, resolve: (choice: string) => void) {
    this.questionInfo = questionInfo;
    this.resolve = resolve;
    this.y = 0;
  }

  get choices(): string[] {
    return this.questionInfo.choices;
  }

  get question(): string {
    return this.questionInfo.question;
  }

  hideCursor(): void {
    stdout.write("\x1B[?25l");
  }

  showCursor(): void {
    stdout.write("\x1B[?25h");
  }

  write(str: string): void {
    stdout.write(str);
  }

  start(): void {
    this.write(`🎩 ${colors.green(this.question)}\n`);
    stdin.on("keypress", this.keyPressedEventHandler(this));
    // readline.emitKeypressEvents(stdin);
    stdin.setRawMode(true);
    stdin.resume();
    stdin.setEncoding("utf-8");
    this.printChoices();
    this.hideCursor();
  }

  printChoices(): void {
    for (let i = 0; i < this.choices.length; i++) {
      this.printChoice(i);
    }
  }

  printChoice(index: number): void {
    if (this.y === index) {
      this.write(colors.blue(`>  ${this.choices[index]}`) + "\n");
    } else {
      this.write(`   ${this.choices[index]}` + "\n");
    }
  }

  reprintChoices(): void {
    for (let i = this.choices.length - 1; i >= 0; i--) {
      stdout.moveCursor(0, 0);
      stdout.clearLine(0);
      stdout.moveCursor(0, i - this.choices.length - i);
      stdout.clearLine(0);
      this.printChoices();
      this.hideCursor();
    }
  }

  keyPressedEventHandler(self: Selection): (str: string, key: any) => void {
    return (_, key) => {
      const { name } = key;
      switch (name) {
        case "return":
          self.showCursor();
          return self.enter();
        case "up":
          return self.upArrow();
        case "down":
          return self.downArrow();
        default:
          return;
      }
    };
  }

  upArrow(): void {
    if (this.y > 0) {
      this.y--;
      this.reprintChoices();
    }
  }

  downArrow(): void {
    if (this.y < this.choices.length - 1) {
      this.y++;
      this.reprintChoices();
    }
  }

  enter(): void {
    this.resolve(this.choices[this.y]);
  }
}
