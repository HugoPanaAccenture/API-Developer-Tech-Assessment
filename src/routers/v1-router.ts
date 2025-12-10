import express from 'express';
const router = express.Router();

import { greetController } from '../infrastructure/http/controller/greet-controller';

router.post('/greet', greetController);

export default router;
