#!/bin/bash

echo "🚀 Setting up IoT Medicine Box Project..."

# Create project structure
mkdir -p client server

echo "📦 Installing frontend dependencies..."
cd client

# Initialize Vite React project if package.json doesn't exist
if [ ! -f "package.json" ]; then
  npm create vite@latest . -- --template react
  npm install
  
  # Install Capacitor
  npm install @capacitor/core @capacitor/cli
  npm install @capacitor/android @capacitor/ios
  
  # Install Tailwind CSS
  npm install -D tailwindcss postcss autoprefixer
  npx tailwindcss init -p
  
  # Install additional dependencies
  npm install axios react-router-dom
  
  echo "⚡ Initializing Capacitor..."
  npx cap init "Medicine Box" "com.iot.medicinebox" --web-dir=dist
fi

cd ..

echo "🔧 Setting up backend..."
cd server

if [ ! -f "package.json" ]; then
  npm init -y
  npm install express cors dotenv
  npm install -D nodemon
fi

cd ..

echo "✅ Setup complete!"
echo ""
echo "📝 Next steps:"
echo "1. Configure Tailwind CSS in client/tailwind.config.js"
echo "2. Update client/src/index.css with Tailwind directives"
echo "3. Start frontend: cd client && npm run dev"
echo "4. Start backend: cd server && npm run dev"
