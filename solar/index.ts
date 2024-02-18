import { Prompt } from "./prompt";
import { IQuestionInfo } from "./types";

const questions: IQuestionInfo[] = [
  {
    key: "name",
    type: "input",
    question: "프로젝트 이름을 설정해주세요: \n",
    validation: "^(?:@[a-z0-9-*~][a-z0-9-*._~]*/)?[a-z0-9-~][a-z0-9-.~]*$",
    errMsg: "유효하지 않은 프로젝트 이름입니다.",
    required: true,
  },
  {
    key: "version",
    type: "input",
    question: "버전을 입력해주세요: default -> 1.0.0 \n",
    validation: "^\\d{1,2}\\.\\d{1,2}\\.\\d{1,2}$",
    errMsg: "유효하지 않은 버전입니다.",
    default: "1.0.0",
  },
  {
    key: "renderType",
    type: "list",
    choices: ["SSR", "CSR", "SERVER"],
    question: `SSR, CSR, SERVER 중에 선택해주세요:`,
  },
];

new Prompt()
  .setQuestions(questions)
  .start()
  .then((_) => _);
