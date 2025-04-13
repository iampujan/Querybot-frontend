# QueryBot Frontend

A modern React-based user interface for QueryBot, an AI-powered FAQ chat application. Built with Vite, TypeScript, and React for a fast and responsive user experience.

<div align="center">
  <img src="https://img.shields.io/badge/React-18-blue.svg" alt="React 18">
  <img src="https://img.shields.io/badge/TypeScript-5-blue.svg" alt="TypeScript 5">
  <img src="https://img.shields.io/badge/Vite-5-brightgreen.svg" alt="Vite 5">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT">
</div>

## ✨ Features

- 💬 **Interactive Chat Interface** for natural conversation
- 🌐 **API Integration** with QueryBot Backend
- 📱 **Responsive Design** for all device sizes
- 🔄 **Real-time Responses** with ReactQuery
- 🎨 **Modern UI** with clean, intuitive design

## 🛠️ Technologies

- **React**: A JavaScript library for building user interfaces
- **TypeScript**: For type safety and better developer experience
- **Vite**: Next generation frontend tooling
- **CSS Modules**: For component-scoped styling
- **Fetch API**: For communication with the backend

## 📋 Requirements

- Node.js 18+
- npm 9+ or Yarn 1.22+

## 🚀 Getting Started

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/iampujan/querybot-frontend.git
   cd querybot-frontend
   ```

2. **Install dependencies:**

   ```bash
   npm install
   # or with yarn
   yarn install
   ```

3. **Configure environment:**

   Create a `.env` file in the chatbot directory:

   ```
   VITE_API_URL=http://localhost:8000 (your backend url)
   ```

### Development

Start the development server:

```bash
npm run dev
# or with yarn
yarn dev
```

The app will be available at `http://localhost:5173` (your frontend url)

### Building for Production

```bash
npm run build
# or with yarn
yarn build
```

Preview the production build:

```bash
npm run preview
# or with yarn
yarn preview
```

## 🔄 Backend Connection

This frontend is designed to work with the [QueryBot Backend](https://github.com/iampujan/querybot-backend). Make sure the backend server is running before using the frontend.

## 🧪 Testing

Run tests with:

```bash
npm run test
# or with yarn
yarn test
```

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
