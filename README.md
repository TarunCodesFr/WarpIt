<div align="left" style="margin:12px 0 8px;">
  <img src="assets/warpit-banner.png" alt="WarpIt Banner" width="100%">
</div>

---

<div align="left" style="margin:12px 0 8px;">
  <img src="assets/warpit-png" alt="WarpIt Logo" width="160">
</div>

---

WarpIt is an independent, open-source URL shortening platform. Built for performance, security, and developer-first simplicity.

---

> [!NOTE]
> Currently, the **WarpIt Backend API** has been open-sourced. The corresponding frontend application and cloud infrastructure manifests are in active development.

## Overview

WarpIt provides a robust infrastructure for programmable link management. It is designed to handle high-throughput redirection while providing detailed analytics and secure user isolation. The system is built using modern engineering practices with a focus on type safety and operational visibility.

## core Features

- **Authenticated API**: Secure JWT-based authentication for administrative operations and link management.
- **Relational Integrity**: Built on PostgreSQL with Prisma ORM to ensure data consistency and schema-level validation.
- **Dynamic Analytics**: Real-time tracking of link engagement metrics, including click counts and origin data.
- **Strict Validation**: Utilizing Zod for runtime schema validation across all API boundaries.
- **Structured Logging**: High-performance logging via Pino for production-grade observability.

---

## Technical Architecture

The WarpIt ecosystem currently consists of the `shortner_api`, a TypeScript-based Node.js application.

### Tech Stack
- **Runtime**: Node.js (v18+)
- **Language**: TypeScript
- **Framework**: Express.js (v5)
- **Database**: PostgreSQL via Prisma ORM
- **Validation**: Zod
- **Authentication**: JsonWebToken (JWT) & bcrypt

---

## Getting Started

Follow these instructions to set up the WarpIt Backend API for local development.

### Prerequisites

- Node.js (LTS version recommended)
- A running PostgreSQL instance
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/TarunCodesFr/WarpIt.git
   cd WarpIt
   ```

2. Navigate to the API directory and install dependencies:
   ```bash
   cd shortner_api
   npm install
   ```

3. Configure the environment:
   Create a `.env` file in the `shortner_api` directory with the following variables:
   ```env
   PORT=5000
   DATABASE_URL="postgresql://user:password@localhost:5432/warpit"
   JWT_SECRET="your_secure_random_key"
   BASE_URL="http://localhost:3000"
   ```

4. Prepare the database:
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

---

## API Documentation

The API endpoints are versioned and accessible under `/api/v1/`.

### Authentication
- `POST /api/v1/auth/signup`: Create a new user account.
- `POST /api/v1/auth/login`: Authenticate and receive a JWT.

### Link Management
- `POST /api/v1/links`: Create a new shortened URL (Requires Authentication).
- `GET /api/v1/links/:id`: Retrieve analytics for a specific link.
- `GET /:shortId`: Public redirection endpoint.

---

## Project Roadmap

- [ ] Release the WarpIt Frontend (React/Next.js).
- [ ] Implement cloud-native deployment manifests (Docker/Kubernetes).
- [ ] Add support for custom domains and automated SSL.
- [ ] Enhance analytics with geographic and device-type data.

---

## Contributing

Contributions are welcome. Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for development guidelines.

## Code of Conduct

All contributors are expected to uphold the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

This project is licensed under the MIT License.
