const connection = require("app/database/connection/mongo");

const { Schema } = connection.mongoose;

const BotSchema = new Schema({
    name: {
        type: String
    },
}, {collection: 'Bot'});

module.exports = connection.model('Bot', BotSchema);