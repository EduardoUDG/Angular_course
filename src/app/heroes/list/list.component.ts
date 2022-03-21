import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
})
export class ListComponent {

  heroes      : string[] = ['Spiderman', 'Iroman', 'Hulk', 'Thor', 'Black panter'];
  heroDeleted : string = '';

  deleteHero():void {
    this.heroDeleted = this.heroes.shift() || '';

  }

  constructor() { }

}
