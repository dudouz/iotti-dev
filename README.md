# 🚀 Eduardo Iotti - Personal Website

This is my personal website and portfolio, developed with modern technologies to showcase my projects and skills in an interactive and responsive way.

## 🛠️ Tech Stack

### Core

- [Next.js 15](https://nextjs.org/) - React framework with App Router
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [React](https://react.dev/) - UI library (RC version)

### UI Components & Styling

- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [ShadCN UI](https://ui.shadcn.com/) - Headless UI components

### State Management & Data Fetching

- [React Query](https://tanstack.com/query) - Server state management and caching
- [React Hook Form](https://react-hook-form.com/) - Form validation

### Features

- [Next Themes](https://github.com/pacocoursey/next-themes) - Dark/Light mode
- [date-fns](https://date-fns.org/) - Date formatting
- [Resend](https://resend.com/) - Email delivery

## ✨ Key Features

- 🎨 Modern and responsive design
- 🌙 Dark/Light theme with system preference detection
- 🎯 SEO optimized with Next.js
- 📱 Mobile-first approach
- 🚀 Optimized performance
- 🎭 Interactive UI components
- 📊 Google Analytics integration
- 💫 Smooth animations and transitions
- 📧 Contact form with PHP backend
- 🔄 Client-side data fetching with React Query

## 🚀 Getting Started

### Development

```bash
# Clone this repository
git clone https://github.com/dudouz/iotti-dev

# Install dependencies
pnpm install

# Run the development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Testing with Docker (Recommended)

Test the full production setup locally with nginx and PHP:

```bash
# Build the Next.js site
pnpm build

# Start Docker containers
docker-compose up

# Open http://localhost:8080 in your browser

# Stop containers
docker-compose down
```

This runs nginx with PHP 7.4-FPM, simulating the production environment.

### Deployment

See [DEPLOYMENT.md](DEPLOYMENT.md) for complete deployment instructions including:
- Production deployment to VPS with nginx
- PHP configuration for contact form
- Environment variables setup

## 📝 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

Contributions are always welcome! Feel free to open an issue or submit a pull request.

## 📬 Contact

- Website: [iotti.dev](https://iotti.dev)
- LinkedIn: [Eduardo Iotti](https://linkedin.com/in/eduardoiotti)

---

<p align="center">
  Made with ❤️ by Eduardo Iotti
</p>
