"use strict";
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
var DiceService = (function () {
    function DiceService() {
    }
    DiceService.prototype.getDice = function () {
        return DICE;
    };
    DiceService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DiceService);
    return DiceService;
}());
exports.DiceService = DiceService;
var DICE_IMAGES = [
    'app/images/dice/dice-one.png',
    'app/images/dice/dice-two.png',
    'app/images/dice/dice-three.png',
    'app/images/dice/dice-four.png',
    'app/images/dice/dice-five.png',
    'app/images/dice/dice-six.png'
];
var DICE = [
    { value: 1, img: DICE_IMAGES[0] },
    { value: 2, img: DICE_IMAGES[1] },
    { value: 3, img: DICE_IMAGES[2] },
    { value: 4, img: DICE_IMAGES[3] },
    { value: 5, img: DICE_IMAGES[4] },
];
//# sourceMappingURL=dice.service.js.map