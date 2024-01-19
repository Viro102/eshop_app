#! /bin/bash

# 1. Build the project
npm run build-frontend
# 2. Copy the build to the server
scp -r ./frontend/dist ./frontend/Dockerfile ./frontend/nginx.conf server:/home/viro/e-commerce/frontend
scp -r ./backend/Dockerfile ./backend/src server:/home/viro/e-commerce/backend
scp -r docker-compose.yml server:/home/viro/e-commerce
# 3. Restart the server
ssh server 'cd /home/viro/e-commerce && docker compose up --build -d'
# 4. Disconnect from the server
exit
