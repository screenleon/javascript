let bird = {
};

let plane = {
};

let flyMixin = function (obj) {
    obj.fly = function () {
        console.log("Flying, wooosh!");
    }
};

flyMixin(bird);
flyMixin(plane);

bird.fly(); // prints "Flying, wooosh!"
plane.fly(); // prints "Flying, wooosh!"