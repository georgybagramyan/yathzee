import { Component } from '@angular/core';

import {PlayerService} from '../services/player.service';
import {DiceService} from '../services/dice.service';

import {Player} from "../entities/player";
import {Die} from '../entities/die';

@Component({
    selector: 'game-board-component',
    template: `
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

        <div class="scoreboard-container">

        </div>
    </div>
    `,
    styles: [`
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

        .die{
            margin: 10px;
        }

        .game-board-container{
            text-align: center;
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



