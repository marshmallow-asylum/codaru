# Build stage - runs on target architecture
FROM oven/bun:1 AS builder
WORKDIR /app

# Copy package files and install dependencies
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# Copy the rest of the files and build
COPY . .
RUN bun --bun run build

# Runtime stage - optimized production environment
FROM oven/bun:1 AS runner
WORKDIR /app

# Copy built files from the builder stage
COPY --from=builder /app /app

# Ensure the environment is set to production
ENV NODE_ENV=production

EXPOSE 7376

CMD ["bun", "--bun", "run", "start"]
