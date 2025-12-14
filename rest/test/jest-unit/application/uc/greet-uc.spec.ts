import { BadRequestGreetError } from '../../../../src/domain/errors/bad-request-greet-error';
import { greetUseCase } from '../../../../src/application/uc/greet-uc';

describe('[Jest-Unit] [greetUseCase]', () => {
  it('should return a greeting message for input "World"', async () => {
    const result = await greetUseCase('World');
    expect(result).toEqual({ message: 'Hello, World!' });
  });

  it('should return a greeting message for input "world" (case insensitive)', async () => {
    const result = await greetUseCase('world');
    expect(result).toEqual({ message: 'Hello, World!' });
  });

  it('should throw BadRequestGreetError for invalid input', async () => {
    try {
      await greetUseCase('InvalidInput');
    } catch (error) {
      expect(error).toBeInstanceOf(BadRequestGreetError);
    }
  });
});
