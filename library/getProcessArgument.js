const retrieveArgv = () => {
    let argv = process.argv.slice(2);
    let argvObject = {};
    while (argv.length > 1) {
        argvObject[argv[0]] = argv[1];
        argv.shift();
        argv.shift();
    }
    return argvObject;
}