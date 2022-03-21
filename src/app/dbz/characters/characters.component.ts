import { Component, Input } from '@angular/core';
import { Character } from '../interfaces/interfaces.interface';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
})
export class CharactersComponent {

  // @Input('characters') characters: Character[] = [];
  @Input() characters: Character[] = [];

  constructor() { }
}
