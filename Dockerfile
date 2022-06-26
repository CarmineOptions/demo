# Build project
FROM node:16.15 AS build

WORKDIR /
COPY ["package.json", "package-lock.json", "./"]
RUN npm ci
COPY . .
RUN npm run build

# Build production static serving image
FROM nginx:1.23
COPY --from=build build /usr/share/nginx/html
