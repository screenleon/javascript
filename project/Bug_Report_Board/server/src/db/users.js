const Joi = require('joi');
const db = require('./connection');

const users = db.get('users');

/*
* username: string
* password: string
* status: string  `閒置中還是debug中`
* identity: string `組別`
* deal_with_bugs: [{_id: ObjectId}, {}, ...] `同時接取多個工作`
* create_at: string
*/

const identity_scope = {
    "測試員": 1,
    "Android": 2,
    "IOS": 3
}

const status_scope = {
    "idle": 1,
    "busy": 2
}

const schema = Joi.object().keys({
    username: Joi.string().alphanum().min(3).required(),
    password: Joi.string().alphanum().min(6).required(),
    identity: Joi.number().valid(Object.values(identity_scope)).required(),
    status: Joi.number()
})

function getAll() {
    return users.find();
};

function create(user) {
    const result = Joi.validate(user, schema);
    if (result.error == null) {
        user.status = status_scope.idle;
        user.create_at = joi_now_date();
        return users.insert(user);
    } else {
        return Promise.reject(result.error);
    }

};

function joi_now_date() {
    const date = new Date();
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
}

module.exports = {
    create,
    getAll
};
