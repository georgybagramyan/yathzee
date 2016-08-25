import {Injectable} from '@angular/core';

import {Die} from '../entities/die';

@Injectable()
export class DiceService{

    getDice(){
        return DICE;
    }
}

const DICE_IMAGES: string[] = [
    'app/images/dice/dice-one.png',
    'app/images/dice/dice-two.png',
    'app/images/dice/dice-three.png',
    'app/images/dice/dice-four.png',
    'app/images/dice/dice-five.png',
    'app/images/dice/dice-six.png'
];

const DICE: Die[] = [
    {value: 1, img: DICE_IMAGES[0] },
    {value: 2, img: DICE_IMAGES[1] },
    {value: 3, img: DICE_IMAGES[2] },
    {value: 4, img: DICE_IMAGES[3] },
    {value: 5, img: DICE_IMAGES[4] },
];