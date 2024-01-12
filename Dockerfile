FROM node:lts as dependencies
WORKDIR /app
COPY package.json ./
COPY prisma ./prisma/
RUN npm install
RUN npx prisma generate

FROM node:lts as builder
WORKDIR /app
COPY . .
COPY --from=dependencies /app/node_modules ./node_modules

RUN npm run build

FROM node:lts as runner
WORKDIR /app
ENV NODE_ENV production
ENV BASE_URL=http://localhost:8887
ENV NEXT_TELEMETRY_DISABLED 1
COPY --from=dependencies /app/prisma ./prisma
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/*.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dictionaries ./dictionaries
COPY --from=builder /app/package.json ./package.json

COPY entrypoint.sh ./entrypoint.sh
RUN chmod +x ./entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]

EXPOSE 3000
CMD ["npm", "start"]
