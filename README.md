# IoT Level 4 Medicine Box

A smart medicine box system with mobile app integration for medication management and monitoring.

## Tech Stack

### Frontend (Mobile App)
- **React** - UI framework
- **Capacitor** - Native mobile capabilities
- **Tailwind CSS** - Styling
- **Vite** - Build tool

### Backend (API Server)
- **Express.js** - REST API server
- **Node.js** - Runtime environment

## Getting Started

### Prerequisites
- Node.js 20+
- npm or yarn

### Setup Instructions

1. **Clone the repository**
   ```bash
   git clone https://github.com/ItsMeWanWan/embedded.git
   cd embedded
   ```

2. **Run setup script**
   ```bash
   chmod +x setup.sh
   ./setup.sh
   ```

3. **Start the backend server**
   ```bash
   cd server
   npm install
   npm run dev
   ```

4. **Start the frontend**
   ```bash
   cd client
   npm install
   npm run dev
   ```

### Building for Mobile

**Android:**
```bash
cd client
npm run build
npx cap add android
npx cap sync
npx cap open android
```

**iOS:**
```bash
cd client
npm run build
npx cap add ios
npx cap sync
npx cap open ios
```

## Project Structure

```
embedded/
├── client/              # React + Capacitor frontend
│   ├── src/
│   ├── public/
│   ├── capacitor.config.json
│   └── package.json
├── server/              # Express.js backend
│   ├── index.js
│   ├── .env.example
│   └── package.json
├── .devcontainer/       # GitHub Codespace configuration
└── setup.sh             # Automated setup script
```

## API Endpoints

- `GET /api/health` - Health check
- `GET /api/medications` - Get all medications
- `POST /api/medications` - Add new medication

## Development

- Frontend runs on `http://localhost:5173`
- Backend runs on `http://localhost:5000`

## Contributing

This is a student IoT Level 4 project.

## License

MIT
