import { Component } from '@angular/core';


interface Person {
  name: string;
  power: number;
}

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

  people: Person[] = [
    {
      name: 'Goku',
      power: 15000
    },
    {
      name: 'Vegeta',
      power: 7500
    }
  ];

  person:Person = {
    name: '',
    power: 0
  }

  addPerson() {
    if ( this.person.name.trim().length === 0 ) { return; }


    this.people.push( this.person );
    console.log( this.person );
    this.person = { name: '', power: 0};
  }

}
