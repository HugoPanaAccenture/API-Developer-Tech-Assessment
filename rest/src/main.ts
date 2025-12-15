import express from 'express';
import dotenv from 'dotenv';

import { errorHandler } from './domain/middlewares/error-middleware';
import { setupSwagger } from './swagger/options';
import v1Router from './routers/v1-router';

dotenv.config();

const port = process.env.PORT || 8000;

const app = express();

app.use(express.json());

setupSwagger(app);

app.use('/api/v1', v1Router);

app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'OK' });
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
