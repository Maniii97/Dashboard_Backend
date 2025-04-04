# Dashboard Backend

This is the backend for a dashboard application that serves **dummy data** to the frontend for **visual representation**. It is built using **Node.js, Express, and TypeScript** and includes **testing, Docker support, AWS deployment, and Nginx for reverse proxy**.

## Features
- **REST APIs** to provide usage, AWS data, cost data, and forecast data.
- **Unit & Integration Testing** using Jest and Supertest.
- **Dockerized Deployment** for containerized execution.
- **Nginx as Reverse Proxy** to manage requests efficiently.
- **AWS Deployment with CI/CD Pipeline** for automated deployments.

## API Endpoints

### 1. API Usage Data
```http
GET /api/usage
```
Returns API usage statistics of various teams.

### 2. AWS Data
```http
GET /api/awsdata
```
Returns AWS Services usage data.

### 3. Cost Data
```http
GET /api/costdata
```
Returns cost analytics of various cloud providers.

### 4. Forecast Data
```http
GET /api/forecast
```
Returns forecast predictions for reserved instances.

### 5. Analyse Cost Data
```http
POST /api/analysis/cost
```
Returns the analysis made on the Cost Data. 

### 6. Analyse Forecast Data
```http
POST /api/analysis/forecast
```
Returns the analysis made on the Forecast Data.

### 7. Chat
```http
POST /api/chat
```
Returns the AI repsonse to the given query, instructed to analyse the data before answering. 

## Project Structure
```
📂 .github/workflows/ # CD Pipeline for automated deployment
📂 __tests__/         # Unit & integration tests
📂 configs/           # Configuration settings (DB, ENV, etc.)
📂 controllers/       # Express route handlers
📂 middlewares/       # Express middlewares
📂 models/            # Database models
📂 routes/            # API routes
📂 utils/             # Utility functions
📜 .env               # Environment variables
📜 Dockerfile         # Docker setup
📜 jest.config.js     # Jest configuration
📜 package.json       # Dependencies
📜 tsconfig.json      # TypeScript configuration
📜 app.ts             # Express server instance
```

## Docker Setup
Build and run the Docker container :
```sh
docker build -t dashboard-backend .
docker run -p -d 3000:3000 --env-file=.env dashboard-backend
```

## Deployment on AWS
- The app is deployed on **AWS EC2**.
- **Nginx** used as a reverse proxy.
- A **CI/CD pipeline** is added for automated deployments.
