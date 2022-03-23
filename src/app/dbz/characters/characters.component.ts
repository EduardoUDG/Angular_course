import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/interfaces.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {

  // @Input('characters') characters: Character[] = [];
  // @Input() characters: Character[] = [];

  get characters() {
    return this.dbzservice.characters;
  }

  constructor( private dbzservice:DbzService ) { }
}
