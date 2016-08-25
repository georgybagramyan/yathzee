import {Pipe, PipeTransform} from '@angular/core';

import {Die} from "../entities/die";

@Pipe({name: 'upperBoundScore'})
export class UpperBoundScorePipe implements PipeTransform{

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
    transform(dice: Die[], dieImg: string): number{
        let value = 0;

        for(let i = 0; i < dice.length; i++){
            let die = dice[i];

            console.log("value before: " + value);
            //value += (die.img === dieImg == true ? 1 : 0);
            if(die.img === dieImg){
                value++;
            }
            console.log("die.img: " + die.img + "\n dieImg: " + dieImg);
            console.log("die.img === dieImg " + die.img === dieImg);
            console.log("value after: " + value);
            console.log("---------------------------------------------");
        }

        return value;
    }
}