const { Bot } = require('app/models/index');

const buildQueryOptions = (req) => {
    const {name} = req.query;
    const options = {};
    if (name) options.name = name;
    return options;
}

const get = (req) => {
    const options = buildQueryOptions(req);
    console.log(options.query);
    console.log(options);
    return Bot.find(options).then(result => result).catch(error => console.log(error));
};

const getById = (req) => {
    const { _id } = req.params;
    return Bot.findOne({_id: _id}).then(result => result).catch(error => console.log(error));
};


const post = (req) => {
    const {body} = req;
    return Bot.create(body)
    .then(result => result)
};

const destroy = (req) => {
    const { _id } = req.params;
    return Bot.findOneAndDelete(_id)
    .then(result => result);
};

module.exports = {
    getById,
    destroy,
    get,
    post,
};