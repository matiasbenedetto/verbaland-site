#!/bin/bash

# Deployment script for Verbaland site

# Exit immediately if a command exits with a non-zero status
set -e

# Function to handle errors
handle_error() {
  echo "❌ Error: Deployment failed at step $STEP"
  exit 1
}

# Set up error trap
trap 'handle_error' ERR

echo "🚀 Deploying Verbaland site..."

STEP="Navigating to application directory"
echo "[1/5] $STEP..."
cd /var/www/verbaland-site

STEP="Pulling latest changes"
echo "[2/5] $STEP..."
git pull

STEP="Installing dependencies"
echo "[3/5] $STEP..."
pnpm install

STEP="Building application"
echo "[4/5] $STEP..."
pnpm run build

STEP="Restarting pm2"
echo "[5/5] $STEP..."
pm2 restart web

# If we get here, all steps completed successfully
echo "✅ Deployment completed successfully!"
