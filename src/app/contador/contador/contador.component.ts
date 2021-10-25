import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
        <h1>Hola mundo</h1>
        <h2>{{title}}</h2>
        <h3>{{1+1}}</h3>
        <hr>
        <h3>La base es <strong>{{base}}</strong></h3>
        <button (click)="acumulador(base) ">+{{base}}</button>
        <span>{{contador}}</span>
        <button (click)="acumulador(-base)">-{{base}}</button>
        <hr>
    `,
    styleUrls: []
})

export class ContadorComponent {
    public title: string = 'Contador App';

    // ejemplo 2
    base: number = 10;
    contador: number = this.base;
    acumulador = (cont: number) => this.contador += cont;
}