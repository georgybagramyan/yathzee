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
            value += (die.img === dieImg ? 1 : 0);
        }

        return value;
    }
}