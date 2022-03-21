import { Component } from '@angular/core';
import { Character } from '../interfaces/interfaces.interface';



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

  addPerson() {
    if ( this.character.name.trim().length === 0 ) { return; }


    this.characters.push( this.character );
    console.log( this.character );
    this.character = { name: '', power: 0};
  }
}
