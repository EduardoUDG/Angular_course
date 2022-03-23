import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/interfaces.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-add-character',
  templateUrl: './add-character.component.html',
})
export class AddCharacterComponent {

  @Input() character : Character = {
    name: '',
    power: 0
  };


  constructor( private dbzService:DbzService ) {}

  addCharacter() {
    if ( this.character.name.trim().length === 0 ) { return; }
    this.dbzService.setCharacter( this.character );
    this.character = { name: '', power: 0};
  }
}
