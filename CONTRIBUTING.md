# Contributing to WarpIt

Thank you for your interest in contributing to WarpIt. This project is a full-stack open-source URL shortener, and we welcome contributions to both our Backend API and the Frontend application.

## Development Workflow

WarpIt is managed as a monorepo using **pnpm** and **Turbo**.

1. **Fork & Clone**: Fork the repository and clone it to your local machine.
2. **Setup**: Follow the setup instructions in the [README.md](README.md#getting-started).
3. **Branch**: Create a feature branch: `git checkout -b feature/your-feature-name`.
4. **Develop**:
   - Use `pnpm dev` to run the entire stack.
   - For backend changes, work in `shortner_api/`.
   - For frontend changes, work in `shortner_web/`.
   - Shared packages are located in `packages/`.
5. **Commit**: Write clear, descriptive commit messages following conventional commits if possible.
6. **Verify**: Ensure your changes work locally and do not introduce regressions.
7. **Pull Request**: Submit a PR to the `main` branch.

## Code Standards

- **TypeScript**: Adhere to strict typing. Avoid using `any`.
- **Naming**: Use `camelCase` for variables/functions and `PascalCase` for types/classes/components.
- **Formatting**: We use Prettier for consistent code style. Run `pnpm format` (if available) or ensure your editor is configured to format on save.
- **Validation**: All API inputs must be validated using Zod schemas.

## Reporting Issues

If you encounter a bug or have a feature proposal, please open an Issue with:
- A descriptive title and summary.
- Reproduction steps for bugs.
- Expected vs. actual behavior.
- Context on why a feature is needed.

## Submitting Pull Requests

Large architectural changes should be discussed in an Issue before implementation. All PRs will be reviewed by maintainers. Ensure your PR description explains the "why" behind the changes.

---

By contributing, you agree to abide by our [Code of Conduct](CODE_OF_CONDUCT.md).
