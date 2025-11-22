# Uno UI

A modern UI library and documentation site built with [UnoCSS](https://unocss.dev/) and [Flexilla](https://github.com/unifydev/flexilla).

## Project Structure

This repository is organized into the following directories:

- **`app`**: The main documentation site and component showcase, built with [Astro](https://astro.build). This is where the core documentation and examples live.
- **`html`**: A standalone Vite project for developing, testing, and showcasing HTML/Vanilla JS versions of the components.

## Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm

### Documentation Site (`app`)

To work on the documentation site:

1. Navigate to the `app` directory:
   ```bash
   cd app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:4321`.

### HTML/Vanilla JS Environment (`html`)

To work on the HTML/Vanilla JS components:

1. Navigate to the `html` directory:
   ```bash
   cd html
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## Technologies Used

- **[UnoCSS](https://unocss.dev/)**: The instant on-demand atomic CSS engine used for styling across the project.
- **[Flexilla](https://github.com/unifydev/flexilla)**: A lightweight, framework-agnostic library for interactive components.
- **[Astro](https://astro.build/)**: The web framework used for the documentation site (`app`).
- **[Vite](https://vitejs.dev/)**: The build tool used for the `html` environment.
- **[@unifydev/preset-ui](https://www.npmjs.com/package/@unifydev/preset-ui)**