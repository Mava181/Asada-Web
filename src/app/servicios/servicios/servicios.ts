import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  standalone: false,
  templateUrl: './servicios.html',
  styleUrl: './servicios.css'
})
export class Servicios {
mostrarRequisitos: boolean[] = [];

  toggleRequisitos(index: number) {
    this.mostrarRequisitos[index] = !this.mostrarRequisitos[index];
  }
}
