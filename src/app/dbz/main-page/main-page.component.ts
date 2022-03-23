import { Component } from '@angular/core';
import { Character } from '../interfaces/interfaces.interface';


@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  character:Character = {
    name: '',
    power: 0
  }

  constructor() {}
}
