import { Injectable } from "@angular/core";
import { Character } from "../interfaces/interfaces.interface";


@Injectable()
export class DbzService {

  private _characters: Character[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  get characters(): Character[] {
    return [ ...this._characters ];
  }



  constructor() {
    console.log('Servicio inizializado');
  }

}
