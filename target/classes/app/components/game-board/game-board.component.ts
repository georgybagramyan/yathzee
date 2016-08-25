import { Component } from '@angular/core';

import {UpperBoundScorePipe} from '../../pipes/upper-bound-score.pipe'

import {PlayerService} from '../../services/player.service';
import {DiceService} from '../../services/dice.service';

import {Player} from "../../entities/player";
import {Die} from '../../entities/die';

@Component({
    selector: 'game-board-component',
    templateUrl: 'app/components/game-board/game-board.component.html',
    styleUrls: ['app/components/game-board/game-board.component.css'],
    pipes: [UpperBoundScorePipe]
})
export class GameBoardComponent
{
    players: Player[];
    me: Player;
    opponent: Player;

    dice: Die[];
    fixedDice: Array<Die>;

    rollCount: number;

    dieImages: string[] = [
        'app/images/yahtzee-icons/dice-one_64.png',
        'app/images/yahtzee-icons/dice-two_64.png',
        'app/images/yahtzee-icons/dice-three_64.png',
        'app/images/yahtzee-icons/dice-four_64.png',
        'app/images/yahtzee-icons/dice-five_64.png',
        'app/images/yahtzee-icons/dice-six_64.png'
    ];

    upperBoundImages: string[] = [
        'app/images/yahtzee-icons/dice-one_64.png',
        'app/images/yahtzee-icons/dice-two_64.png',
        'app/images/yahtzee-icons/dice-three_64.png',
        'app/images/yahtzee-icons/dice-four_64.png',
        'app/images/yahtzee-icons/dice-five_64.png',
        'app/images/yahtzee-icons/dice-six_64.png'
    ];

    lowerBoundImages: string[] = [
        'app/images/yahtzee-icons/three_of_a_kind_64.png',
        'app/images/yahtzee-icons/four_of_a_kind_64.png',
        'app/images/yahtzee-icons/full_house_64.png',
        'app/images/yahtzee-icons/small_street_64.png',
        'app/images/yahtzee-icons/large_street_64.png',
        'app/images/yahtzee-icons/yahtzee_64.png',
        'app/images/yahtzee-icons/chance_64.png'
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
        this.me = this.players[0];
        this.opponent = this.players[1];
    }

    private initDice(){
        this.dice = this.diceService.getDice();
    }

    /**
     * Roll the dice three times
     * Get image path randomly from "dieImages" array and apply it to "img" property of Die object
     */
    rollDice(){

        if(this.rollCount < 3){
            for(let i = 0; i < this.dice.length; i++){

                let isFixed = this.fixedDice.includes(this.dice[i]);

                if(isFixed == false){
                    let randomIndex = Math.floor(Math.random()*(this.dieImages.length));

                    let imgPath = this.dieImages[randomIndex];
                    let dieValue = i+1;
                    let die = this.dice[i];

                    die.img = imgPath;
                    die.value = dieValue;

                    this.dice[i] = die;
                }

            }

            this.rollCount++;
        }
    }

    /**
     * Ads index of a die from "dice" array to "fixedDice" array
     * or removes it from "fixedDice" array if index exists
     * @param index
     */
    fixeDie(die: Die){

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



