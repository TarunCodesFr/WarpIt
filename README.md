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

> [!CAUTION]
> WarpIt is currently in its **ALPHA** development stage. The software is provided "as is" and may contain significant bugs, security vulnerabilities, or undergo breaking changes without notice. Use in production environments at your own risk.

> [!NOTE]
> Currently, the **WarpIt Backend API** has been open-sourced. The corresponding frontend application and cloud infrastructure manifests are in active development.

## Overview

WarpIt provides a robust infrastructure for programmable link management. It is designed to handle high-throughput redirection while providing detailed analytics and secure user isolation. The system is built using modern engineering practices with a focus on type safety and operational visibility.

## Security Vulnerabilities

The security of our users' data is our highest priority. If you discover any security vulnerabilities within WarpIt, please **do not open a public issue**. Instead, report them directly to the development team at:

**[akurax4@gmail.com](mailto:akurax4@gmail.com)**

We will acknowledge your report and work to resolve the issue as quickly as possible.

## Core Features

- **Authenticated API**: Secure JWT-based authentication for administrative operations and link management.
- **Relational Integrity**: Built on PostgreSQL with Prisma ORM to ensure data consistency and schema-level validation.
- **Dynamic Analytics**: Real-time tracking of link engagement metrics, including click counts and origin data.
- **Strict Validation**: Utilizing Zod for runtime schema validation across all API boundaries.
- **Structured Logging**: High-performance logging via Pino for production-grade observability.

---

## Technical Architecture

The WarpIt ecosystem is architected for scalability and maintainability. The current implementation centers on the `shortner_api`.

### Internal Module Structure
The API follows a modular structure to ensure clear Separation of Concerns (SoC):
- **Core Modules**: Contained in `src/core/modules/v1/`, defining the primary business logic for Links and Authentication.
- **Database Layer**: Managed via Prisma in `src/packages/prisma.ts`, providing a type-safe abstraction over PostgreSQL.
- **Utilities**: Centralized logging, configuration management, and validation helpers in `src/utils/`.

### Authentication Flow
WarpIt implements a stateless authentication mechanism:
1. **Identity Verification**: Users provide credentials via the `/auth/login` endpoint.
2. **Token Issuance**: Upon successful validation, a JWT (JSON Web Token) is generated using a secure `JWT_SECRET`.
3. **Middleware Enforcement**: Protected routes utilize a custom middleware to verify the HMAC signature of incoming Bearer tokens.

### Design Principles
- **Type Safety**: End-to-end type safety using TypeScript to minimize runtime exceptions.
- **Statelessness**: The API is designed to be horizontally scalable by maintaining no local session state.
- **Schema-Driven**: API inputs and environment variables are strictly validated using Zod schemas.

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
- `POST /api/v1/auth/signup`: Registers a new user account.
- `POST /api/v1/auth/login`: Validates credentials and returns a secure JWT.

### Link Management
- `POST /api/v1/links`: Generates a new shortened URL (Requires Bearer Token).
- `GET /api/v1/links/:id`: Retrieves detailed analytics for a specific link.
- `GET /:shortId`: Public endpoint that handles high-speed redirection.

---

## Project Roadmap

- [ ] **Phase 1**: Stability improvements and automated integration testing.
- [ ] **Phase 2**: Release of the WarpIt Frontend (React/Next.js/Tailwind).
- [ ] **Phase 3**: Multi-domain support and automated Let's Encrypt integration.
- [ ] **Phase 4**: Advanced analytics dashboard with geographic and agent-based insights.

---

## Contributing

Contributions are welcome. Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for detailed development guidelines and Pull Request processes.

## Code of Conduct

All contributors are expected to uphold the [Code of Conduct](CODE_OF_CONDUCT.md) to ensure a welcoming and professional community.

## License

This project is licensed under the **GNU Affero General Public License v3.0**. See the [LICENSE](LICENSE) file for the full license text.

---

<div align="left">
  Built for the open-source community by <b>TarunCodes</b>
</div>
