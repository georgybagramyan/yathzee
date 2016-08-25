import {Injectable} from '@angular/core';

import {Die} from '../entities/die';

@Injectable()
export class DiceService{

    getDice(){
        return DICE;
    }
}

const DICE_IMAGES: string[] = [
    'app/images/yahtzee-icons/dice-one_64.png',
    'app/images/yahtzee-icons/dice-two_64.png',
    'app/images/yahtzee-icons/dice-three_64.png',
    'app/images/yahtzee-icons/dice-four_64.png',
    'app/images/yahtzee-icons/dice-five_64.png',
    'app/images/yahtzee-icons/dice-six_64.png'
];

const DICE: Die[] = [
    {value: 1, img: DICE_IMAGES[0] },
    {value: 2, img: DICE_IMAGES[1] },
    {value: 3, img: DICE_IMAGES[2] },
    {value: 4, img: DICE_IMAGES[3] },
    {value: 5, img: DICE_IMAGES[4] },
];