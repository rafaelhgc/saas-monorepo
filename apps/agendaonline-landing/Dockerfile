FROM node:18

RUN npm install -g pm2

WORKDIR /app

COPY dist/apps/agendaonline-landing /app

EXPOSE 4000

CMD ["pm2-runtime", "./server/server.mjs"]
