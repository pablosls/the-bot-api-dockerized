const connection = require("app/database/connection/mongo");

const { Schema } = connection.mongoose;

const MessageSchema = new Schema({
    conversationId: {
        type: String
    },
    timestamp: {
        type: String
    },
    from: {
        type: String
    },
    to: {
        type: String
    },
    text: {
        type: String
    }
}, {collection: 'Message'});

module.exports = connection.model('Message', MessageSchema);