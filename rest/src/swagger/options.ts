import swaggerUi from 'swagger-ui-express';
import swaggerJSDoc from 'swagger-jsdoc';
import express from 'express';

const port = process.env.PORT || 8000;
const URL = process.env.URL || `http://localhost:${port}`;

const options = {
  definition: {
    openapi: '3.1.0',
    info: {
      title: 'Tech Assessment API with Swagger',
      version: '0.1.0',
      description:
        'This is a simple REST API application made with Express and documented with Swagger',
      contact: {
        name: 'Hugo Pena Cabarcos',
        url: 'https://www.linkedin.com/in/hugo-pena-cabarcos/',
        email: 'hugo.pena.cabarcos@accenture.com',
      },
    },
    servers: [
      {
        url: URL,
      },
    ],
  },
  apis: ['./src/routers/**/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: express.Application) => {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
