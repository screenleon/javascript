const base64encode = function (string) {
    return new Buffer(string, 'utf8').toString('base64');
}

const base64decode = function (string) {
    return new Buffer(string, 'base64').toString('utf8');
}