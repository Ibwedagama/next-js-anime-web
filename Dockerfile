# Install dependencies only when needed
FROM node:20-alpine AS deps
WORKDIR /app

# Install app dependencies
COPY package.json package-lock.json ./
RUN npm install

# Build app
FROM node:20-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js app
RUN npm run build

# Production image
FROM node:20-alpine AS runner
WORKDIR /app

# Only copy necessary files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

ENV NODE_ENV production
EXPOSE 3000

CMD ["npm", "start"]
