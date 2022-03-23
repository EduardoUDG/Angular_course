import { Component } from '@angular/core';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {

  get characters() {
    return this.dbzservice.characters;
  }

  constructor( private dbzservice:DbzService ) { }
}
