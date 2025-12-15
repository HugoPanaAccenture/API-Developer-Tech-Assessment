import express from 'express';
const router = express.Router();

import { validateInput } from '../domain/middlewares/validation-middleware';

import { greetSchema } from '../domain/schemas/greet-schema';

import { greetController } from '../infrastructure/http/controller/greet-controller';

/**
 * @swagger
 * tags:
 *   name: V1
 *   description: Version 1 API
 */

/**
 * @swagger
 * /api/v1/greet:
 *   post:
 *     summary: Greet the world
 *     description: Returns a greeting message to the world.
 *     tags: [V1]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               input:
 *                 type: string
 *                 example: World
 *     responses:
 *       200:
 *         description: A greeting message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 input:
 *                   type: string
 *                   example: World
 */

router.post('/greet', validateInput(greetSchema), greetController);

export default router;
