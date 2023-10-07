FROM node:18

ENV NEXTAUTH_URL=http://localhost:3000
ENV DATABASE_URL=postgresql://0.0.0.0:5432
WORKDIR /app
COPY package*.json ./
COPY prisma ./prisma/
RUN npm install
RUN npx prisma generate
COPY . .
EXPOSE 3000
CMD npm run build
CMD npm start