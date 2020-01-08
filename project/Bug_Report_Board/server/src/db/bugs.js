const Joi = require('joi');
const db = require('./connection');

const bugs = db.get('bugs');
const users = require('./users');
// * item: number `maybe not use`
// * description: string
// * project: string `型別分類`
// * emergency_level: number `maybe small number means urgency (1~5)`
// * tester: string
// * machine_number: string
// * solver: string
// * os: string
// * bug_version: string
// * fixed_version: string
// * date_start_fix: string
// * date_solve: string
// * remark: string `備註`
// * bug_fix: boolean `engineer only`
// * solve: boolean   `tester only`

const schema = Joi.object().keys({
    description: Joi.string().max(200).required(),
    project: Joi.string().required,
    emergency_level: Joi.number().validate([1-5]),
    tester: Joi.string().required(),
    machine_number: Joi.string().required(),
    solver: Joi.string(),
    date_solve: Joi.date(),  //'12-31-2020'
    fixed_version: Joi.string(),

})

function getAll() {
    return users.find();
};

function create(user) {
    const result = Joi.validate(user, schema);
    if (result.error == null) {
        user.status = status_scope.idle;
        user.create_at = new Date();
        return users.insert(user);
    } else {
        return Promise.reject(result.error);
    }

};

module.exports = {
    create,
    getAll
};
