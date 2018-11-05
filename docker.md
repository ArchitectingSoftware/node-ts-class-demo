## Steps to Dockerize and Run

1. Create `Dockerfile` with the following contents:

```dockerfile
FROM node:alpine

WORKDIR /app
COPY package.json package-lock.json ./dist/server.js ./
RUN npm install --prod
EXPOSE 3000
CMD ["node", "server.js"]
```

2. Build the container - see `buildcontainer.sh`
   
3. Run the container - `docker run  -d -p:3000:3000 architectingsoftware/ts-demo`

4. Shell into the container `docker exec -it container_id /bin/sh`