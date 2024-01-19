#! /bin/bash

# 1. Build the project
npm run build
# 2. Copy the build to the server
scp -r dist Dockerfile docker nginx.conf server:/home/viro/e-commerce
# 3. Restart the server
ssh server 'cd /home/viro/e-commerce/docker && docker compose up -d'
# 4. Disconnect from the server
exit
