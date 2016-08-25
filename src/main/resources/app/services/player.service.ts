import { Injectable } from '@angular/core';

import {Player} from '../entities/player';

@Injectable()
export class PlayerService {

    getPLayers(){
        return PLAYERS;
    }
}

const PLAYERS: Player[] = [
    { img: "app/images/player/bioman.ico" },
    { img: "app/images/player/grim_reaper.ico" },
    { img: "app/images/player/ironman.ico" }
];