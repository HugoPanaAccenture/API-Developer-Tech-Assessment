import express from 'express';
const router = express.Router();

import { validateInput } from '../domain/middlewares/validation-middleware';

import { greetSchema } from '../domain/schemas/greet-schema';

import { greetController } from '../infrastructure/http/controller/greet-controller';

router.post('/greet', validateInput(greetSchema), greetController);

export default router;
