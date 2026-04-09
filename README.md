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

## Overview

WarpIt provides a robust infrastructure for programmable link management. It is designed to handle high-throughput redirection while providing detailed analytics and secure user isolation. The system is built using modern engineering practices with a focus on type safety and operational visibility.

## Security Vulnerabilities

The security of our users' data is our highest priority. If you discover any security vulnerabilities within WarpIt, please **do not open a public issue**. Instead, report them directly to the development team at:

**[akurax4@gmail.com](mailto:akurax4@gmail.com)**

We will acknowledge your report and work to resolve the issue as quickly as possible.

## Tech Stack

The WarpIt ecosystem is built on a modern, type-safe stack:

- **Frontend**: [Next.js](https://nextjs.org/) | [React](https://react.dev/) | [Tailwind CSS](https://tailwindcss.com/) | [Shadcn UI](https://ui.shadcn.com/)
- **Backend**: [Express](https://expressjs.com/) | [Node.js](https://nodejs.org/)
- **Database**: [PostgreSQL](https://www.postgresql.org/) with [Prisma ORM](https://www.prisma.io/)
- **Logic & Validation**: [TypeScript](https://www.typescriptlang.org/) | [Zod](https://zod.dev/)
- **Build System**: [Turbo](https://turbo.build/)

## Core Features

- **Authenticated Dashboard**: Manage links and view analytics through a modern, responsive UI.
- **Secure API**: JWT-based authentication for administrative operations and link management.
- **Relational Integrity**: Powered by PostgreSQL to ensure data consistency and schema-level validation.
- **Dynamic Analytics**: Real-time tracking of link engagement metrics, including click counts and origin data.
- **Structured Logging**: High-performance logging via Pino for production-grade observability.

---

## Technical Architecture

WarpIt is architected as a monorepo for seamless full-stack development.

### Workspace Structure
- **`shortner_web`**: Next.js frontend application providing the user dashboard and landing experience.
- **`shortner_api`**: Express/TypeScript API handling link redirection, analytics, and business logic.
- **`packages/`**: Shared configurations and utilities across the workspace.

### Design Principles
- **End-to-End Type Safety**: Shared types and strict TypeScript configuration across the stack.
- **Modular Scalability**: Decoupled frontend and backend allowing for independent scaling and deployment.
- **Schema-Driven**: API boundaries and environment variables validated using Zod.

---

## Getting Started

Follow these instructions to set up the full WarpIt stack locally.

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS)
- [pnpm](https://pnpm.io/) (Recommended)
- PostgreSQL instance

### Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/TarunCodesFr/WarpIt.git
   cd WarpIt
   ```

2. **Install dependencies**:
   ```bash
   pnpm install
   ```

3. **Configure Environment**:
   - Navigate to `shortner_api/` and create a `.env` file with `DATABASE_URL` and `JWT_SECRET`.
   - Setup your database connection string.

4. **Initialize Database**:
   ```bash
   cd shortner_api
   npx prisma migrate dev
   npx prisma generate
   ```

### Development

Run both the API and Web applications concurrently using Turbo:

```bash
pnpm dev
```

The API will be available at `http://localhost:5000` (or your configured port) and the Web dashboard at `http://localhost:3000`.

---

## API Documentation

The API endpoints are versioned and accessible under `/api/v1/`.

### Authentication
- `POST /api/v1/auth/signup`: Registers a new user account.
- `POST /api/v1/auth/login`: Validates credentials and returns a secure JWT.

### Link Management
- `POST /api/v1/links`: Generates a new shortened URL (Requires Bearer Token).
- `GET /api/v1/links/:id`: Retrieves detailed analytics for a specific link.
- `GET /:shortId`: Public redirection endpoint.

---

## Project Roadmap

- [x] **Phase 1**: Stability improvements and core API development.
- [x] **Phase 2**: Launch of the WarpIt Open-Source Frontend.
- [ ] **Phase 3**: Advanced analytics (Geographic/Device insights).
- [ ] **Phase 4**: Multi-domain support and automated SSL management.

---

## Contributing

Contributions are welcome. Please refer to [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

## License

This project is licensed under the **GNU Affero General Public License v3.0**. See the [LICENSE](LICENSE) file for details.

---

<div align="left">
  Built with ❤️ for the open-source community by <b>TarunCodes</b>
</div>
