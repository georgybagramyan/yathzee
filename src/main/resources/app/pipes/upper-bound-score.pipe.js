var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var UpperBoundScorePipe = (function () {
    function UpperBoundScorePipe() {
    }
    /**
     * Counts dice and returns counted amount
     *
     * Takes die images argument
     *
     * Usage:
     *  Dice[] | upperBoundScore:dieImg
     * Example:
     *  dice | upperBoundScore:upperBoundImg
     *
     * @param dice
     * @param dieImg
     * @returns number
     */
    UpperBoundScorePipe.prototype.transform = function (dice, dieImg) {
        var value = 0;
        for (var i = 0; i < dice.length; i++) {
            var die = dice[i];
            console.log("value before: " + value);
            //value += (die.img === dieImg == true ? 1 : 0);
            if (die.img === dieImg) {
                value++;
            }
            console.log("die.img: " + die.img + "\n dieImg: " + dieImg);
            console.log("die.img === dieImg " + die.img === dieImg);
            console.log("value after: " + value);
            console.log("---------------------------------------------");
        }
        return value;
    };
    UpperBoundScorePipe = __decorate([
        core_1.Pipe({ name: 'upperBoundScore' }), 
        __metadata('design:paramtypes', [])
    ], UpperBoundScorePipe);
    return UpperBoundScorePipe;
})();
exports.UpperBoundScorePipe = UpperBoundScorePipe;
//# sourceMappingURL=upper-bound-score.pipe.js.map