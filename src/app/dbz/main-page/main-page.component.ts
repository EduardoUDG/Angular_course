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


  person:Person = {
    name: 'Trucks',
    power: 14000
  }

  addPerson() {
    console.log( this.person );
  }

  // cambiarNombre( event:any ) {
  //   console.log( event.target.value );
  // }
}
