FROM node:10.13.0

RUN useradd --user-group --create-home --shell /bin/false app &&\
    npm install --global npm@6.4.1

ENV HOME=/home/app

COPY package.json package-lock.json $HOME/bot-api/

RUN chown -R app:app $HOME/*

USER app

WORKDIR $HOME/bot-api

RUN npm cache clean --force && npm install --silent --progress=false

USER root

COPY . $HOME/bot-api

RUN chown -R app:app $HOME/*

USER app

CMD ["npm", "start"]

