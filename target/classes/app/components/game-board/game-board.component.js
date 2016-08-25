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
var upper_bound_score_pipe_1 = require('../../pipes/upper-bound-score.pipe');
var player_service_1 = require('../../services/player.service');
var dice_service_1 = require('../../services/dice.service');
var GameBoardComponent = (function () {
    function GameBoardComponent(playerService, diceService) {
        this.playerService = playerService;
        this.diceService = diceService;
        this.dieImages = [
            'app/images/yahtzee-icons/dice-one_64.png',
            'app/images/yahtzee-icons/dice-two_64.png',
            'app/images/yahtzee-icons/dice-three_64.png',
            'app/images/yahtzee-icons/dice-four_64.png',
            'app/images/yahtzee-icons/dice-five_64.png',
            'app/images/yahtzee-icons/dice-six_64.png'
        ];
        this.upperBoundImages = [
            'app/images/yahtzee-icons/dice-one_64.png',
            'app/images/yahtzee-icons/dice-two_64.png',
            'app/images/yahtzee-icons/dice-three_64.png',
            'app/images/yahtzee-icons/dice-four_64.png',
            'app/images/yahtzee-icons/dice-five_64.png',
            'app/images/yahtzee-icons/dice-six_64.png'
        ];
        this.lowerBoundImages = [
            'app/images/yahtzee-icons/three_of_a_kind_64.png',
            'app/images/yahtzee-icons/four_of_a_kind_64.png',
            'app/images/yahtzee-icons/full_house_64.png',
            'app/images/yahtzee-icons/small_street_64.png',
            'app/images/yahtzee-icons/large_street_64.png',
            'app/images/yahtzee-icons/yahtzee_64.png',
            'app/images/yahtzee-icons/chance_64.png'
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
        this.me = this.players[0];
        this.opponent = this.players[1];
    };
    GameBoardComponent.prototype.initDice = function () {
        this.dice = this.diceService.getDice();
    };
    /**
     * Roll the dice three times
     * Get image path randomly from "dieImages" array and apply it to "img" property of Die object
     */
    GameBoardComponent.prototype.rollDice = function () {
        if (this.rollCount < 3) {
            for (var i = 0; i < this.dice.length; i++) {
                var isFixed = this.fixedDice.includes(this.dice[i]);
                if (isFixed == false) {
                    var randomIndex = Math.floor(Math.random() * (this.dieImages.length));
                    var imgPath = this.dieImages[randomIndex];
                    var dieValue = i + 1;
                    var die = this.dice[i];
                    die.img = imgPath;
                    die.value = dieValue;
                    this.dice[i] = die;
                }
            }
            this.rollCount++;
        }
    };
    /**
     * Ads index of a die from "dice" array to "fixedDice" array
     * or removes it from "fixedDice" array if index exists
     * @param index
     */
    GameBoardComponent.prototype.fixeDie = function (die) {
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
            templateUrl: 'app/components/game-board/game-board.component.html',
            styleUrls: ['app/components/game-board/game-board.component.css'],
            pipes: [upper_bound_score_pipe_1.UpperBoundScorePipe]
        }), 
        __metadata('design:paramtypes', [player_service_1.PlayerService, dice_service_1.DiceService])
    ], GameBoardComponent);
    return GameBoardComponent;
})();
exports.GameBoardComponent = GameBoardComponent;
//# sourceMappingURL=game-board.component.js.map