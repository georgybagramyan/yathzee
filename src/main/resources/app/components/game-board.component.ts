import { Component } from '@angular/core';

import {PlayerService} from '../services/player.service';
import {DiceService} from '../services/dice.service';

import {Player} from "../entities/player";
import {Die} from '../entities/die';

@Component({
    selector: 'game-board-component',
    template: `
    <div class="game-container">

        <div class="game-board-container">
            <player-component [player]="playerOne"></player-component>

            <div class="dice-container">
                <ul>
                    <li *ngFor="let die of dice" class="die" >
                        <img src="{{die.img}}" (click)="fixeMe(die)" [class.selected]="fixedDice.includes(die)">
                    </li>
                </ul>
            </div>

            <div class="button-container">
                <button (click)="rollDice()">Roll</button>
            </div>

            <player-component [player]="playerTwo"></player-component>
        </div>

        <div class="scoreboard-container">

            <div class="player-one">
                <div class="upper-bound-container">
                    <header class="bound-heading">
                        <div class="score-title bound-score-title-left">
                            <h3>Upper: </h3>
                            <h3 class="score">100</h3>
                        </div>
                        <div class="score-title bonus-score-title-right">
                            <h3>Bonus: </h3>
                            <h3 class="score">100</h3>
                        </div>
                    </header>
                    <ul class="score-icons-container">
                        <li *ngFor="let upperBoundImg of upperBoundImages">
                            <div class="score-box">
                                <img src="{{upperBoundImg}}"/>
                                <h4 class="score-box-score">0</h4>
                            </div>
                        </li>
                    </ul>
                </div>

                <div class="lower-bound-container">
                    <header class="bound-heading">
                        <div class="score-title bound-score-title-left">
                            <h3>Lower: </h3>
                            <h3 class="score">100</h3>
                        </div>
                        <div class="score-title bonus-score-title-right">
                            <h3>Bonus: </h3>
                            <h3 class="score">100</h3>
                        </div>
                    </header>
                    <ul class="score-icons-container">
                        <li *ngFor="let lowerBoundImg of lowerBoundImages">
                            <div class="score-box">
                                <img src="{{lowerBoundImg}}"/>
                                <h4 class="score-box-score">0</h4>
                            </div>
                        </li>
                    </ul>
                </div>

                <footer class="bound-footer">
                    <div class="bound-footer-content-container">
                        <h2>Score:</h2>
                        <h2 class="score">0</h2>
                    </div>
                </footer>

        </div>

    </div>
    `,
    styles: [`
        .game-container{
            display: inline-flex;
            flex-direction: row
        }

        .scoreboard-container{
            height: 60%
            border: 4px solid red;
        }

        .score-title{
            display: inline-flex;
            flex-direction: row
        }

        .bound-score-title-left{
            margin-left: 10px;
        }

        .bonus-score-title-right{
            margin-left: 38%;
        }

        .score-icons-container{
            margin: 0px;
            padding: 0px;
        }

        .score-icons-container li{
            display: inline-block;
            list-style-type: none;
        }

        .score-box{
            margin: 10px;
        }

        .score-box-score{
            text-align: center;
        }

        .score{
            padding-left: 10px;
        }

        .bound-footer{
            text-align: center;
        }

        .bound-footer-content-container{
            display: inline-flex;
            flex-direction: row
        }

        .dice-container{
            display: inline-block;
        }

        .dice-container ul{
            margin: 0px;
            padding: 0px;
        }

        .dice-container li{
            display: inline-block;
            list-style-type: none;
        }

        .dice-container img.selected{
            opacity: 0.4;
        }

        .game-board-container{
            text-align: center;
        }

        .die{
            margin: 10px;
        }

        .button-container button{
            margin: 10px;
            padding: 20px
        }


    `]
})
export class GameBoardComponent
{
    players: Player[];
    playerOne: Player;
    playerTwo: Player;

    dice: Die[];
    fixedDice: Array<Die>;

    rollCount: number;

    dieImages: string[] = [
        'app/images/dice/dice-one.png',
        'app/images/dice/dice-two.png',
        'app/images/dice/dice-three.png',
        'app/images/dice/dice-four.png',
        'app/images/dice/dice-five.png',
        'app/images/dice/dice-six.png'
    ];

    upperBoundImages: string[] = [
        'app/images/score/dice-one_64.png',
        'app/images/score/dice-two_64.png',
        'app/images/score/dice-three_64.png',
        'app/images/score/dice-four_64.png',
        'app/images/score/dice-five_64.png',
        'app/images/score/dice-six_64.png'
    ];

    lowerBoundImages: string[] = [
        'app/images/score/three_of_a_kind_64.png',
        'app/images/score/four_of_a_kind_64.png',
        'app/images/score/full_house_64.png',
        'app/images/score/small_street_64.png',
        'app/images/score/large_street_64.png',
        'app/images/score/yahtzee_64.png',
        'app/images/score/chance_64.png'
    ];

    constructor(private playerService: PlayerService, private diceService: DiceService){
        this.fixedDice = new Array<Die>(5);
        this.rollCount = 0;
    }

    ngOnInit(): void{
        this.initPlayers();
        this.initDice();
    }

    private initPlayers(){
        this.players = this.playerService.getPLayers();
        this.playerOne = this.players[0];
        this.playerTwo = this.players[1];
    }

    private initDice(){
        this.dice = this.diceService.getDice();
    }

    /**
     * Roll the dice three times
     * Get image path randomly from "dieImages" array and apply it to "img" property of Die object
     */
    rollDice(){

        //rool dice if rollCount <= 3
        if(this.rollCount < 3){
            for(let i = 0; i < this.dice.length; i++){

                let isFixed = this.fixedDice.includes(this.dice[i]);

                if(isFixed == false){
                    let randomIndex = Math.floor(Math.random()*(this.dieImages.length));
                    this.dice[i].img = this.dieImages[randomIndex];
                }

            }

            //increment rollCount if rollcount <= 3
            this.rollCount++;
        }
    }

    /**
     * Ads index of a die from "dice" array to "fixedDice" array
     * or removes it from "fixedDice" array if index exists
     * @param index
     */
    fixeMe(die: Die){

        if(this.fixedDice.includes(die)){
            let index = this.fixedDice.indexOf(die);
            if(index > -1){
                this.fixedDice.splice(index, 1);
            }
        }else if(this.rollCount > 0) {
            this.fixedDice.push(die);
        }

    }
}



