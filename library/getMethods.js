/**
 * Get the class methods
 * @param {object} object
 * @return {string[]}
 */
function getMethods(object) {
    const methods = [];
    for(var element in object) {
        if(typeof object[element] == "function") {
            methods.push(element);
        }
    }

    return methods;
}