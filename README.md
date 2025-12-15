# API Developer Tech Assessment

This repository contains a **Node.js + TypeScript** project developed as part of a technical assessment.  
It includes:

- A **REST API server**
- Automated tests

---

## Project Description & Architecture

The project is structured to keep responsibilities clearly separated:

```
rest/src/               # REST API folders
├── application/        # Use case layer
├── domain/             # Business logic and domain errors
├── infrastructure/     # Layer meant to collect and send data from outside calls/APIs.
├── routers/            # Routes for each endpoint.
└── main.ts             # Main entry point
tests/
└── jest-unit/          # Jest unit tests
```

### High‑level Architecture

- **Express.js** handles HTTP requests for the REST API
- **Domain-driven approach** for business logic
- **Zod** for request validation
- **Jest** for testing
- **MCP SDK** for exposing tools via the Model Context Protocol

---

## Prerequisites

- **Node.js** >= 18
- **npm** >= 9
- Git

---

## Dependencies

Key dependencies used in this project:

- `express` – REST API framework
- `typescript` – Static typing
- `zod` – Runtime validation
- `jest` – Testing framework

---

## Installation

Clone the repository and install dependencies:

```bash
git clone https://github.com/HugoPanaAccenture/API-Developer-Tech-Assessment.git
cd API-Developer-Tech-Assessment
npm install
```

---

## Running the REST API Server

### Development mode

```bash
npm run dev:rest
```

### Production build

```bash
npm run build
npm start:rest
```

The API will be available at:

```
http://localhost:8000
```

---

## REST API Endpoints

### Health Check

**GET** `/health`

```bash
curl http://localhost:8000/health
```

Response:

```json
{
  "status": "ok"
}
```

---

### Greet Endpoint

**POST** `/greet`

```bash
curl --location 'http://localhost:8000/api/v1/greet' \
--header 'Content-Type: application/json' \
--data '{
    "input": "World"
}'
```

Response:

```json
{
  "message": "Hello, World!"
}
```

Error response example:

```json
{
  "error": {
    "code": 400,
    "title": "badRequestError",
    "detail": "body",
    "message": "Expected input world but received e. Please provide 'world' as input."
  }
}
```

---

## Running Tests

Run all tests:

```bash
npm test
```

Run unit tests:

```bash
npm run test:unit
```

Test coverage unit:

```bash
npm run test:cov:unit
```

---

## Screenshots / Evidence

Screenshots demonstrating:

- REST API running in Postman
- Test execution
- Postman Collection for REST API

Should be added to the `docs/` folder.

---

## Assumptions & Design Decisions

- TypeScript was chosen for safety and maintainability
- Express provides a simple, widely adopted framwork
- Zod ensures request validation at runtime

---

## Author

Hugo Pena Cabarcos
