import type { Request, Response, NextFunction } from 'express';
import { ApiError } from '../errors/api-error';

export const errorHandler = (
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  if (err instanceof ApiError) {
    return res.status(err.code).json({
      error: {
        code: err.code,
        title: err.title,
        detail: err.detail,
        message: err.message,
      },
      stack: process.env.NODE_ENV === 'production' ? null : err.stack,
    });
  }

  console.error('Unexpected error:', err);
  res.status(500).json({
    error: {
      code: 500,
      title: 'internalServerError',
      detail: 'An unexpected error occurred',
      message:
        process.env.NODE_ENV === 'production'
          ? 'Internal server error'
          : err.message,
    },
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  });
};
