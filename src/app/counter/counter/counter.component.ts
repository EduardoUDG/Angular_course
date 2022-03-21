import { Component } from "@angular/core";

@Component({
  selector: 'app-counter',
  template: `
  <h1>{{ title }}</h1>

  <button (click)="acumullator( base )"> + {{ base }}</button>
  <span>{{ counter }}</span>
  <button (click)="acumullator( -base )"> - {{ base }}</button>
`
})

export class CounterComponent {

  title   : string = 'Conador App';
  counter : number = 0;
  base    : number = 5;

  acumullator( value:number ) {
    this.counter += value;
  }

}
