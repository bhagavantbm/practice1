var laptop = /** @class */ (function () {
    function laptop() {
        this.screen = 1;
        this.buttons = 84;
        this.mouse = 1;
        this.camera = 1;
        this.keyboard = 1;
        this.usbport = 2;
    }
    laptop.prototype.withmouse = function () {
        return this.mouse;
    };
    return laptop;
}());
var computer = new laptop();
console.log(computer.withmouse());
console.log(computer.buttons);
