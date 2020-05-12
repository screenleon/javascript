String.prototype.calculateCharToObject = function () {
    let charObject = {};
    const stringArray = this.split('');
    for (let element of stringArray) {
        if (charObject.hasOwnProperty(element)) charObject[element]++;
        else charObject[element] = 1;
    }
    return charObject;
}