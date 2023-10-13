# Stage 1: Build the application
FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN npm ci --omit-dev
RUN npm run build

# Stage 2: Run the application
FROM node:18-alpine
WORKDIR /app
COPY --from=build /app /app
CMD ["npm", "run", "start"]
