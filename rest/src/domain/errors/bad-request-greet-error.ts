import { ApiError } from './api-error';

export class BadRequestGreetError extends ApiError {
  constructor(input: string) {
    super(
      400,
      'badRequestError',
      'body',
      `Expected input world but received ${input}. Please provide 'world' as input.`,
    );
  }
}
