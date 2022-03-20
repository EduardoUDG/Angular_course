import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent {
  // Por defecto las propiedades son publicas
  title   : string = 'Conador App';
  counter : number = 0;


}
