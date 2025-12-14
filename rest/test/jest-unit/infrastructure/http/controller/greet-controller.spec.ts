import { Request, Response } from 'express';

import { greetController } from '../../../../../src/infrastructure/http/controller/greet-controller';

import { greetUseCase } from '../../../../../src/application/uc/greet-uc';

jest.mock('../../../../../src/application/uc/greet-uc', () => ({
  greetUseCase: jest.fn(),
}));

describe('[Jest-Unit] [greetController]', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  const mockJson = jest.fn();
  const mockStatus = jest.fn(() => ({ json: mockJson }));

  const mockRes = {
    status: mockStatus,
  } as unknown as Response;
  it('should return 200 and the response from greetUseCase', async () => {
    const mockReq = {
      body: { input: 'world' },
    } as unknown as Request;

    (greetUseCase as jest.Mock).mockResolvedValue({ message: 'Hello, World!' });

    await greetController(mockReq, mockRes);

    expect(greetUseCase).toHaveBeenCalledWith('world');
    expect(mockStatus).toHaveBeenCalledWith(200);
    expect(mockJson).toHaveBeenCalledWith({ message: 'Hello, World!' });
  });

  it('should throw an error when greetUseCase fails', async () => {
    const mockReq = {
      body: { input: 'invalid-input' },
    } as unknown as Request;

    const testError = new Error('BadRequest');

    (greetUseCase as jest.Mock).mockRejectedValue(testError);

    await expect(greetController(mockReq, mockRes)).rejects.toThrow(testError);

    expect(mockStatus).not.toHaveBeenCalled();
    expect(mockJson).not.toHaveBeenCalled();
  });
});
