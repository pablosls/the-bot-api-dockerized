require("app-module-path").addPath(__dirname);
const bodyParser = require('body-parser');
const app = require('express')();

const port = process.env.PORTA || 3000;

app.use(bodyParser.json()); 

const connection = require('app/database/connection/mongo');

app.use('/', require("./app/routes/index"));

app.listen(port, () => console.log(`Servidor rodando na porta ${port}`));





