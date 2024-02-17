import colors from "colors/safe";

export class ProgressBar {
  total: number;
  current: number;
  barLength: number;

  constructor() {
    this.barLength = process.stdout.columns! - 30;
  }

  init(): void {
    this.total = 100;
    this.current = 0;
    this.update(this.current);
  }

  update(current: number): void {
    this.current = current;
    const currentProgress = this.current / this.total;
    this.draw(currentProgress);
  }

  draw(currentProgress: number): void {
    const filledBarLength = (currentProgress * this.barLength).toFixed(0);
    const emptyBarLength = this.barLength - Number(filledBarLength);
    const filledBar = this.get_bar(
      Number(filledBarLength),
      "*",
      colors.bgGreen
    );
    const emptyBar = this.get_bar(emptyBarLength, "-", colors.bgBlack);
    const percentageProgress = (currentProgress * 100).toFixed(2);
    process.stdout.clearLine(0);
    process.stdout.cursorTo(0);
    process.stdout.write(
      `진행률: [${filledBar}${emptyBar}] | ${percentageProgress}%`
    );
  }

  private get_bar(
    length: number,
    char: string,
    color: (str: string) => string
  ): string {
    const str = char.repeat(length);
    return color(str);
  }
}
