import { Component } from '@angular/core'; // decorador 
// import { basename } from 'path';
// import { basename } from 'path';

@Component({
  selector: 'app-root', // nombre componente 
  templateUrl: './app.component.html', // render 
  styleUrls: ['./app.component.css'] // estilos
})

export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
}
