import { Component, Input} from '@angular/core';

import {Player} from '../entities/player';

@Component({
    selector: 'player-component',
    template: `
    <div>
        <img src="{{player.img}}" height="150   px" width="150px">
    </div>
    `
})
export class PlayerComponent{
    @Input() player: Player;
}

