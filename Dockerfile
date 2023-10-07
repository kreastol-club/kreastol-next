#FROM node:18
#
#ENV NEXTAUTH_URL=http://localhost:3000
#ENV DATABASE_URL=postgresql://0.0.0.0:5432
#WORKDIR /app
#COPY package*.json ./
#COPY prisma ./prisma/
#RUN npm install
#RUN npx prisma generate
#COPY . .
#RUN npm run build
#EXPOSE 3000
#CMD npm start


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
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/*.ts ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/dictionaries ./dictionaries
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["npm", "start"]