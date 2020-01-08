const monk = require('monk');

const connectionString = 'localhost/bug_report';
const db = monk(connectionString);

module.exports = db;
