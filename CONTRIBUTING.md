# Contributing to WarpIt

Thank you for your interest in contributing to WarpIt. This document serves as a guideline for development and submission processes.

## Restricted Scope

The **WarpIt Frontend** and **Cloud Infrastructure** repositories are private at this time. Only the **Backend API** (located in the `shortner_api` directory) is currently open for public contributions.

## Development Workflow

1. Fork the repository and replicate it locally.
2. Follow the setup instructions in the [README.md](README.md#getting-started).
3. Create a feature branch: `git checkout -b feature/your-feature-name`.
4. Commit your changes with clear, descriptive messages.
5. Verify your changes locally against a test database.
6. Push to your fork and submit a Pull Request.

## Code Standards

- **TypeScript**: Adhere to strict typing where possible.
- **Naming Conventions**: Use camelCase for variables/functions and PascalCase for types/classes.
- **Formatting**: Run `npx prettier --write .` before committing changes.
- **Validation**: New endpoints must include Zod schema validation.

## Reporting Issues

If you encounter a bug or have a feature proposal, please open an Issue with the following information:
- A descriptive title.
- Detailed steps to reproduce for bugs.
- Expected versus actual behavior.
- Proposed implementation details for features.

## Submitting Pull Requests

Large changes should be discussed in an Issue first. All Pull Requests will be reviewed by a core maintainer. Ensure your PR description clearly explains the problem it solves and any architectural considerations.

---

By contributing, you agree to abide by the [Code of Conduct](CODE_OF_CONDUCT.md).
