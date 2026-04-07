<div align="center">
  <img src="assets/warpit-banner.png" alt="WarpIt Banner" width="100%">
  <br />
  <img src="assets/warpit-png" alt="WarpIt Logo" width="120">
  <h1>WarpIt - Fast & Open Source URL Shortener</h1>
  <p><i>Effortless link management with speed, security, and developer-first simplicity.</i></p>

  <p>
    <img src="https://img.shields.io/badge/Status-Public%20Beta-blue" alt="Status">
    <img src="https://img.shields.io/badge/License-MIT-green" alt="License">
    <img src="https://img.shields.io/badge/Backend-Open%20Source-orange" alt="Backend">
    <img src="https://img.shields.io/badge/PRs-Welcome-brightgreen" alt="PRs Welcome">
  </p>
</div>

---

## 🚀 Overview

**WarpIt** is a modern, high-performance URL shortening service designed for developers and power users. Built with **TypeScript**, **Node.js**, and **Prisma**, it provides a robust backend API for creating, managing, and tracking short links at scale.

> [!NOTE]
> Currently, only the **Backend API** has been open-sourced. The frontend and cloud deployment configurations are in development and will be released in the future.

## ✨ Features

- **🔐 Secure Auth**: Built-in JWT-based authentication for secure user management.
- **⚡ High Performance**: Lightweight API built on Express and PostgreSQL.
- **📊 Analytics**: Track link performance (clicks and visitor data).
- **🛠️ Developer First**: Fully typed with TypeScript, using Zod for robust schema validation.
- **📂 Database Neutral**: Powered by Prisma ORM for easy database switching and migrations.

## 🛠️ Tech Stack

- **Languge**: [TypeScript](https://www.typescriptlang.org/)
- **Framework**: [Express.js](https://expressjs.com/)
- **ORM**: [Prisma](https://www.prisma.io/)
- **Database**: PostgreSQL (Recommended)
- **Validation**: [Zod](https://zod.dev/)
- **Logging**: [Pino](https://getpino.io/)

---

## 📦 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [PostgreSQL](https://www.postgresql.org/)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/TarunCodesFr/WarpIt.git
   cd WarpIt
   ```

2. **Setup the Backend**
   ```bash
   cd shortner_api
   npm install
   ```

3. **Configure Environment Variables**
   Create a `.env` file in the `shortner_api` directory:
   ```env
   PORT=5000
   DATABASE_URL="postgresql://user:password@localhost:5432/warpit"
   JWT_SECRET="your_secret_key"
   BASE_URL="http://localhost:3000" # For CORS
   ```

4. **Initialize Database**
   ```bash
   npx prisma migrate dev
   npx prisma generate
   ```

5. **Start Development Server**
   ```bash
   npm run dev
   ```

---

## 📜 API Documentation

The API is structured under `/api/v1/`. Below are the primary endpoints:

### Auth
- `POST /api/v1/auth/signup` - Create a new account.
- `POST /api/v1/auth/login` - Authenticate and get a JWT token.

### Links
- `POST /api/v1/links` - Create a new short link (Protected).
- `GET /api/v1/links/:id` - Get link details and analytics (Protected).
- `GET /:shortId` - Redirect to the target URL.

---

## 🤝 Contributing

We welcome contributions! Please see our [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to get started.

## 📄 Code of Conduct

Help us maintain a healthy community. Read our [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for more information.

## ⚖️ License

Distributed under the MIT License. See `LICENSE` for more information.

---

<div align="center">
  Built with ❤️ for the open-source community by <b>TarunCodes</b>
</div>
