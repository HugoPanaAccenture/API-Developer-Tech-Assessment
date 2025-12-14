import { Request, Response, NextFunction } from 'express';
import { z } from 'zod';
import { validateInput } from '../../../../src/domain/middlewares/validation-middleware';

describe('[Jest-Unit] [validateInput middleware]', () => {
  let mockReq: Partial<Request>;
  let mockRes: Partial<Response>;
  let mockNext: NextFunction;

  beforeEach(() => {
    mockReq = {};
    mockRes = {
      status: jest.fn(() => mockRes as unknown as Response),
      json: jest.fn(() => mockRes as unknown as Response),
    } as unknown as Response;
    mockNext = jest.fn();
  });

  const mockSchema = z.object({
    body: z.object({
      name: z.string(),
      age: z.number().int().positive(),
    }),
    query: z.object({
      page: z.string().optional(),
    }),
    params: z.object({}),
    headers: z.object({}),
  });

  it('should call next() when validation succeeds', () => {
    mockReq.body = { name: 'John', age: 30 };
    mockReq.query = { page: '1' };
    mockReq.params = {};
    mockReq.headers = {};

    const middleware = validateInput(mockSchema);
    middleware(mockReq as Request, mockRes as Response, mockNext);

    expect(mockRes.status).not.toHaveBeenCalled();
    expect(mockRes.json).not.toHaveBeenCalled();
    expect(mockNext).toHaveBeenCalledTimes(1);
  });

  it('should return 400 and error details when validation fails', () => {
    mockReq.body = { name: 123, age: -5 };
    mockReq.query = {};
    mockReq.params = {};
    mockReq.headers = {};

    const middleware = validateInput(mockSchema);
    middleware(mockReq as Request, mockRes as Response, mockNext);

    expect(mockRes.status).toHaveBeenCalledWith(400);
    expect(mockRes.json).toHaveBeenCalledWith({
      status: 'error',
      message: 'Validation failed',
      errors: expect.any(Array),
    });
    expect(mockNext).not.toHaveBeenCalled();
  });
});
