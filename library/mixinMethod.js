let test1 = {
};

let test2 = {
};

let mixin = function (obj) {
    obj.example = function () {
        console.log("test to check example function");
    }
};

mixin(test1);
mixin(test2);

test1.example(); // print test to check example function
test2.example(); // print test to check example function