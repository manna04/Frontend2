# Contributing to Frontend2

Thank you for your interest in contributing to Frontend2! We welcome contributions from everyone. This document provides guidelines and instructions for contributing.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Enhancements](#suggesting-enhancements)
- [Pull Request Process](#pull-request-process)
- [Development Setup](#development-setup)
- [Coding Standards](#coding-standards)
- [Commit Messages](#commit-messages)

## Code of Conduct

### Our Pledge

We are committed to providing a welcoming and inspiring community for all. Please read and adhere to our Code of Conduct:

- Be respectful and inclusive
- Welcome diverse perspectives and experiences
- Provide constructive feedback
- Focus on what is best for the community
- Show empathy towards other community members

## Getting Started

1. **Fork the repository** - Click the "Fork" button on GitHub
2. **Clone your fork** locally:
   ```bash
   git clone https://github.com/YOUR_USERNAME/Frontend2.git
   cd Frontend2
   ```
3. **Add upstream remote**:
   ```bash
   git remote add upstream https://github.com/manna04/Frontend2.git
   ```
4. **Create a new branch** for your feature:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## How to Contribute

### Reporting Bugs

Before creating a bug report, check the [issue list](https://github.com/manna04/Frontend2/issues) to avoid duplicates.

When reporting a bug, please include:

- **Clear description** - What is the bug?
- **Steps to reproduce** - How can we reproduce the issue?
- **Expected behavior** - What should happen?
- **Actual behavior** - What actually happens?
- **Environment** - OS, Node version, npm version
- **Screenshots** - If applicable
- **Error logs** - Console errors or stack traces

**Bug Report Template:**
```
**Describe the bug**
A clear and concise description of what the bug is.

**Steps to Reproduce**
1. Go to '...'
2. Click on '...'
3. See error

**Expected Behavior**
What you expected to happen.

**Actual Behavior**
What actually happens.

**Environment**
- OS: [e.g., macOS, Windows, Linux]
- Node version: [e.g., 16.0.0]
- npm version: [e.g., 7.0.0]

**Screenshots**
If applicable, add screenshots here.
```

### Suggesting Enhancements

Enhancement suggestions are tracked as GitHub issues. When creating an enhancement suggestion, please include:

- **Clear description** - What is the enhancement?
- **Use case** - Why would this be useful?
- **Alternative solutions** - Any alternative approaches?
- **Additional context** - Any other relevant information?

## Pull Request Process

1. **Update your branch** with the latest upstream changes:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```

2. **Install dependencies** and run tests:
   ```bash
   npm install
   npm test
   ```

3. **Make your changes** following the [Coding Standards](#coding-standards)

4. **Run tests** to ensure nothing breaks:
   ```bash
   npm test
   ```

5. **Build the project** to verify production build:
   ```bash
   npm run build
   ```

6. **Commit your changes** following [Commit Messages](#commit-messages) guidelines

7. **Push to your fork**:
   ```bash
   git push origin feature/your-feature-name
   ```

8. **Create a Pull Request** on GitHub:
   - Use a clear, descriptive title
   - Reference any related issues (e.g., "Fixes #123")
   - Describe what changes you made and why
   - Include screenshots if applicable
   - Ensure all tests pass

9. **Code Review** - Be responsive to feedback and make requested changes

10. **Merge** - Once approved, your PR will be merged!

## Development Setup

### Prerequisites

- Node.js v16.0.0 or higher
- npm v7.0.0 or higher

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Run tests
npm test

# Build for production
npm run build
```

## Coding Standards

### JavaScript/React Guidelines

- **Use ES6+ syntax** - Use modern JavaScript features
- **Functional Components** - Prefer functional components with hooks
- **Component Structure**:
  ```jsx
  import React from 'react';
  import './ComponentName.css';

  const ComponentName = ({ prop1, prop2 }) => {
    // Component logic here
    return (
      <div className="component-name">
        {/* JSX content */}
      </div>
    );
  };

  export default ComponentName;
  ```

- **Props Validation** - Document expected props
- **Comments** - Add comments for complex logic
- **Naming Conventions**:
  - Components: PascalCase (e.g., `MyComponent.js`)
  - Variables/functions: camelCase (e.g., `myFunction`)
  - Constants: UPPER_SNAKE_CASE (e.g., `API_KEY`)
  - CSS classes: kebab-case (e.g., `.my-class`)

### CSS Guidelines

- **BEM Naming** - Use Block Element Modifier pattern:
  ```css
  .button { }
  .button--primary { }
  .button__icon { }
  ```
- **Organize properties** - Alphabetical or grouped by type
- **Avoid inline styles** - Use CSS files instead
- **Responsive design** - Mobile-first approach

### File Organization

```
src/
├── components/    # Reusable UI components
├── pages/         # Page/route components
├── assets/        # Images, fonts, media
├── shared/        # Utilities, hooks, constants
├── App.js
└── index.js
```

## Commit Messages

Write clear, descriptive commit messages following this format:

```
<type>(<scope>): <subject>

<body>

<footer>
```

### Types

- **feat** - A new feature
- **fix** - A bug fix
- **docs** - Documentation changes
- **style** - Code style changes (formatting, missing semicolons, etc.)
- **refactor** - Code refactoring without feature/fix changes
- **test** - Adding or updating tests
- **chore** - Build, dependencies, or tooling changes

### Examples

```
feat(auth): add user login functionality
fix(navbar): resolve mobile menu toggle issue
docs(README): update installation instructions
style(components): format button component code
refactor(utils): simplify date formatting function
test(App): add unit tests for App component
chore(deps): upgrade React to v19.2.5
```

### Guidelines

- Use imperative mood ("add feature" not "added feature")
- Don't capitalize first letter
- No period at the end
- Limit subject to 50 characters
- Wrap body at 72 characters
- Explain what and why, not how

## Questions?

- **Open an issue** - For questions about the project
- **Check existing issues** - Your question might already be answered
- **GitHub Discussions** - For general questions and discussions

---

**Thank you for contributing to Frontend2! 🎉**

Your contributions help make this project better for everyone.
