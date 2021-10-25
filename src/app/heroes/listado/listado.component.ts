import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  heroeBorrado: string = ''
  constructor() {
    console.log('constructor');
  }

  // se dispara de forma auto
  ngOnInit(): void {
    console.log('ngOnInit');
  }

  heroes: string[] = ['SpiderMan', 'IronMan', 'Hulk', 'Thor'];


  borrarHeroe(): void {
    this.heroeBorrado = this.heroes.shift() || '';
  }

}
