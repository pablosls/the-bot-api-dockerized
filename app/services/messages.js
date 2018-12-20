const { Message } = require('app/models/index');

const buildQueryOptions = (req) => {
    const {conversationId, timestamp, from, to, text } = req.query;
    const options = {};
    if (conversationId) options.conversationId = conversationId;
    if (timestamp) options.timestamp = timestamp;
    if (from) options.from = from;
    if (to) options.to = to;
    if (text) options.text = text;
    return options;
}

const get = (req) => {
    const options = buildQueryOptions(req);
    console.log(options.query);
    console.log(options);
    return Message.find(options).then(result => result).catch(error => console.log(error));
};

const getById = (req) => {
    const { _id } = req.params;
    return Message.findOne({_id: _id}).then(result => result).catch(error => console.log(error));
};


const post = (req) => {
    const {body} = req;
    return Message.create(body)
    .then(result => result)
};

const destroy = (req) => {
    const { _id } = req.params;
    return Message.findOneAndDelete(_id)
    .then(result => result);
};

module.exports = {
    getById,
    destroy,
    get,
    post,
};