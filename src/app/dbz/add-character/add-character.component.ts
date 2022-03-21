import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/interfaces.interface';


@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  @Input() characters: Character[] = [];
  @Input() character : Character = {
    name: '',
    power: 0
  };


  addCharacter() {
    if ( this.character.name.trim().length === 0 ) { return; }

    console.log( this.character );
    this.characters.push( this.character );
    this.character = { name: '', power: 0};
    console.log( this.characters );
  }
}
