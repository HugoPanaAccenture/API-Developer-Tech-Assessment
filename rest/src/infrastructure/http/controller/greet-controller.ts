'use strict';

import { Request, Response } from 'express';
import { greetUseCase } from '../../../application/uc/greet-uc';

export async function greetController(req: Request, res: Response) {
  try {
    const { input } = req.body || {};

    const response = await greetUseCase(input);

    res.status(200).json(response);
  } catch (error) {
    throw error;
  }
}
