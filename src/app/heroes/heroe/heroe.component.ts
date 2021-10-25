import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html',
    styleUrls: []
})

export class HeroeComponent {
    public nombre: string = 'IronMan';
    public edad: number = 45;

    obtenerNombre(): string {
        return `${this.nombre}  -  ${this.edad}`
    }

    get nombreCapitalizado(): string {
        return this.nombre.toLocaleUpperCase();
    }

    cambiarNombre(): void {
        this.nombre = 'Spiderman';
    }

    cambiarEdad(): void {
        this.edad = 30;
    }


}