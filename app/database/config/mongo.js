const mongoose = require('mongoose');
const {user, password, host, port, database} = require("credentials");

mongoose.Promise = Promise;

const createConnection = () => {
  //  const credentials = `mongodb://${user}:${password}@${host}:${port}/${database}`;
    const credentials = `mongodb://${user}:${password}@mongodb/${database}`;
    const connection = mongoose.createConnection(credentials, {
        socketTimeoutMS: 0, 
        keepAlive: true, 
        reconnectTries: 5,
        authSource: 'admin', 
        useNewUrlParser: true,
    })
    .on('error', (args) => {
        console.log("Não foi possivel criar conexao com o mongo");
    })
    .on('open', () => {
        console.log("Conexão com o MongoDB realizada com sucesso");
    });

    connection.mongoose = mongoose;
    return connection;
};

module.exports = exports = {
    createConnection,
}