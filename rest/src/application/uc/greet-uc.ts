import { BadRequestGreetError } from '../../domain/errors/bad-request-greet-error';

export async function greetUseCase(input: string) {
  if (input && input.toLowerCase() === 'world') {
    return { message: `Hello, World!` };
  }
  throw new BadRequestGreetError(input);
}
