export type questionType = "input" | "list";

export interface IQuestionInfo {
  key: string;
  type: questionType;
  required?: boolean;
  question: string;
  choices?: string[];
  default?: string;
  validation?: string;
  errMsg?: string;
}
