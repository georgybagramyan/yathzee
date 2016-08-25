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
var player_service_1 = require('../services/player.service');
var dice_service_1 = require('../services/dice.service');
var GameBoardComponent = (function () {
    function GameBoardComponent(playerService, diceService) {
        this.playerService = playerService;
        this.diceService = diceService;
        this.dieImages = [
            'app/images/dice/dice-one.png',
            'app/images/dice/dice-two.png',
            'app/images/dice/dice-three.png',
            'app/images/dice/dice-four.png',
            'app/images/dice/dice-five.png',
            'app/images/dice/dice-six.png'
        ];
        this.fixedDice = new Array(5);
        this.rollCount = 0;
    }
    GameBoardComponent.prototype.ngOnInit = function () {
        this.initPlayers();
        this.initDice();
    };
    GameBoardComponent.prototype.initPlayers = function () {
        this.players = this.playerService.getPLayers();
        this.playerOne = this.players[0];
        this.playerTwo = this.players[1];
    };
    GameBoardComponent.prototype.initDice = function () {
        this.dice = this.diceService.getDice();
    };
    /**
     * Roll the dice three times
     * Get image path randomly from "dieImages" array and apply it to "img" property of Die object
     */
    GameBoardComponent.prototype.rollDice = function () {
        //rool dice if rollCount <= 3
        if (this.rollCount < 3) {
            for (var i = 0; i < this.dice.length; i++) {
                var isFixed = this.fixedDice.includes(this.dice[i]);
                if (isFixed == false) {
                    var randomIndex = Math.floor(Math.random() * (this.dieImages.length));
                    this.dice[i].img = this.dieImages[randomIndex];
                }
            }
            //increment rollCount if rollcount <= 3
            this.rollCount++;
        }
    };
    /**
     * Ads index of a die from "dice" array to "fixedDice" array
     * or removes it from "fixedDice" array if index exists
     * @param index
     */
    GameBoardComponent.prototype.fixeMe = function (die) {
        if (this.fixedDice.includes(die)) {
            var index = this.fixedDice.indexOf(die);
            if (index > -1) {
                this.fixedDice.splice(index, 1);
            }
        }
        else if (this.rollCount > 0) {
            this.fixedDice.push(die);
        }
    };
    GameBoardComponent = __decorate([
        core_1.Component({
            selector: 'game-board-component',
            template: "\n    <div class=\"game-board-container\">\n        <player-component [player]=\"playerOne\"></player-component>\n\n        <div class=\"dice-container\">\n            <ul>\n                <li *ngFor=\"let die of dice\" class=\"die\" >\n                    <img src=\"{{die.img}}\" (click)=\"fixeMe(die)\" [class.selected]=\"fixedDice.includes(die)\">\n                </li>\n            </ul>\n        </div>\n\n        <div class=\"button-container\">\n            <button (click)=\"rollDice()\">Roll</button>\n        </div>\n\n        <player-component [player]=\"playerTwo\"></player-component>\n\n        <div class=\"scoreboard-container\">\n\n        </div>\n    </div>\n    ",
            styles: ["\n        .dice-container{\n            display: inline-block;\n        }\n\n        .dice-container ul{\n            margin: 0px;\n            padding: 0px;\n        }\n\n        .dice-container li{\n            display: inline-block;\n            list-style-type: none;\n        }\n\n        .dice-container img.selected{\n            opacity: 0.4;\n        }\n\n        .die{\n            margin: 10px;\n        }\n\n        .game-board-container{\n            text-align: center;\n        }\n\n        .button-container button{\n            margin: 10px;\n            padding: 20px\n        }\n\n\n    "]
        }), 
        __metadata('design:paramtypes', [player_service_1.PlayerService, dice_service_1.DiceService])
    ], GameBoardComponent);
    return GameBoardComponent;
})();
exports.GameBoardComponent = GameBoardComponent;
//# sourceMappingURL=game-board.component.js.map