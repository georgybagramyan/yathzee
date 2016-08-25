import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from '../components/app.component';
import { GameBoardComponent }  from '../components/game-board.component';
import { PlayerComponent }  from '../components/player.component';
import { DieComponent }  from '../components/die.component';

import { PlayerService } from '../services/player.service'
import { DiceService } from '../services/dice.service'

@NgModule({
    imports:      [ BrowserModule],
    declarations: [ AppComponent, GameBoardComponent, PlayerComponent, DieComponent],
    providers:    [ PlayerService, DiceService],
    bootstrap:    [ AppComponent ]

})
export class AppModule { }
