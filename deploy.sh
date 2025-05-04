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

STEP="Pulling latest changes"
echo "$STEP..."
git pull

STEP="Installing dependencies"
echo "$STEP..."
pnpm install

STEP="Building application"
echo "$STEP..."
pnpm run build

STEP="Restarting pm2"
echo "$STEP..."
pm2 restart web

# If we get here, all steps completed successfully
echo "✅ Deployment completed successfully!"
