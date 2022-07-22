# 1. Install dependencies only when needed
FROM node:17 As install

WORKDIR /usr/src/app

COPY package*.json .

RUN npm install

COPY . .

# 3. Production image, copy all the files and run next
FROM install as builder

RUN npm run build

#===== setup-production: installs only deps needed for running in production
FROM node:17 as setup-production

WORKDIR /usr/src/app

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY package*.json .

RUN npm install --only=production

# You only need to copy next.config.js if you are NOT using the default configuration
COPY --from=builder /usr/src/app/ ./

EXPOSE 3000

USER nextjs

CMD ["yarn", "start"]
