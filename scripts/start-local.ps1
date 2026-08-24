$ErrorActionPreference = 'Stop'
$Root = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
Set-Location $Root

if (-not (Test-Path 'platform/.env.local')) { Copy-Item 'platform/.env.example' 'platform/.env.local' }

docker compose up -d
npm install
npm run db:generate
npm --workspace platform exec prisma migrate deploy
npm run db:seed
Write-Host 'Institute 9 is starting at http://localhost:3000' -ForegroundColor Cyan
npm run dev
