import { Component } from '@angular/core';
import { Character } from '../interfaces/interfaces.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];


  character:Character = {
    name: '',
    power: 0
  }


  addNewCharacter( character: Character ) {
    this.characters.push( character );
  }

  constructor( private dbzService: DbzService ) {

  }
}
