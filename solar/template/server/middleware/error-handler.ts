import { Context } from "koa";

export const errorHandler = async (
  ctx: Context,
  next: () => Promise<any>
) => {
  try {
    await next();
  } catch (error){
    const { status, body } = error;
    // status code 400이상은 dev환경에서만 바디를 출력
    console.error(`[${status} ERROR]:: ${body}`);
  }
};
