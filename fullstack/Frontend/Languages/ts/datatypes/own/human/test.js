var human = /** @class */ (function () {
    function human() {
        this.hands = 2;
        this.ear = 2;
        this.nose = 1;
        this.eye = 2;
        this.selfrespect = true;
    }
    human.prototype.withear = function () {
        return this.ear;
    };
    return human;
}());
var humans = new human();
console.log(humans.withear());
