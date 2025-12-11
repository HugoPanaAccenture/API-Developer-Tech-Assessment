import express from 'express';
import dotenv from 'dotenv';

import { errorHandler } from './domain/middlewares/error-middleware';
import v1Router from './routers/v1-router';

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

app.use('/api/v1', v1Router);

app.get('/health', (_req, res) => {
  res.send('API is running....');
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
