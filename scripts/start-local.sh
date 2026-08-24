#!/usr/bin/env bash
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT"

if [ ! -f platform/.env.local ]; then cp platform/.env.example platform/.env.local; fi

echo "Starting Institute 9 PostgreSQL..."
docker compose up -d

echo "Installing packages..."
npm install

echo "Generating Prisma client..."
npm run db:generate

echo "Applying database migrations..."
npm run db:migrate -- --name init || npm run db:migrate

echo "Seeding Institute 9 data..."
npm run db:seed

echo "Starting Institute 9 at http://localhost:3000"
npm run dev
