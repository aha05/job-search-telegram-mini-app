#!/bin/bash

# =========================
# START NEXT.JS FRONTEND
# =========================
echo "Starting Next.js..."
npm run dev &

# =========================
# START CLOUDFLARE TUNNEL (FRONTEND)
# =========================
echo "Starting frontend tunnel..."
cloudflared tunnel --url http://127.0.0.1:3000 &

echo "Services started!"
