import { Component } from '@angular/core';
import { Character } from '../interfaces/interfaces.interface';
import { DbzService } from '../services/dbz.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  // characters: Character[] = [];


  character:Character = {
    name: '',
    power: 0
  }


  // addNewCharacter( character: Character ) {
  //   this.characters.push( character );
  // }

  // get characters() {
  //   return this.dbzService.characters;
  // }

  constructor() {
    // this.characters = this.dbzService.characters;
  }
}
