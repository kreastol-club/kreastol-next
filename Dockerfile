FROM node:lts as dependencies
WORKDIR /app
COPY package.json ./
RUN npm install

FROM node:lts as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

RUN npm run build

FROM node:lts as runner
WORKDIR /app
ENV NEXT_TELEMETRY_DISABLED 1

COPY --from=dependencies /app/prisma ./prisma
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/*.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 4500
CMD ["npm", "start"]
