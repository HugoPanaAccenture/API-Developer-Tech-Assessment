export class ApiError extends Error {
  code: number;
  title: string;
  detail: string;

  constructor(
    code: number = 500,
    title: string = 'internalServerError',
    detail: string = 'unexpected error',
    message: string = 'unexpected error',
  ) {
    super(message);
    this.code = code;
    this.title = title;
    this.detail = detail;
  }
}
