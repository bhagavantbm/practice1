var car = /** @class */ (function () {
    function car() {
        this.stearing = 1;
        this.wheels = 4;
        this.sheets = 7;
        this.engine = 1;
    }
    car.prototype.withengine = function () {
        return this.engine;
    };
    return car;
}());
var carr = new car();
console.log(carr.withengine);
