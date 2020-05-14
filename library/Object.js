Object.prototype.isEqual = function (compareObject) {
    const objKeys = Object.keys(this);
    const compareObjKeys = Object.keys(compareObject);
    if (objKeys.length !== compareObjKeys.length) return false;

    for (let objKey of objKeys) {
        if (this[objKey] !== compareObject[objKey]) return false;
    }
    return true;
}

// const test1 = { one: 1, two: 2 };
// const test2 = { one: 1, two: 2 };
// const test3 = { one: 1, two: 3 };
// console.log(test1.isEqual(test2));
// console.log(test1.isEqual(test3));