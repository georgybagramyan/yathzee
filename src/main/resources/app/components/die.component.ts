import { Component, Input} from '@angular/core';

import {Die} from '../entities/die';

@Component({
    selector: 'die-component',
    template: `
    <img src="{{die.img}}">
    `
})
export class DieComponent{
    @Input() die: Die;
}