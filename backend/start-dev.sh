#!/bin/bash
# =========================
# START BACKEND (FASTAPI EXAMPLE)
# =========================
echo "Starting backend..."
uvicorn main:app --reload --port 8000 &

# =========================
# START BACKEND TUNNEL
# =========================
echo "Starting backend tunnel..."
cloudflared tunnel --url http://127.0.0.1:8000 &

echo "All services started!"