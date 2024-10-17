import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent {
  // Listado de temas (simulado con algunos datos)
  temas = [
    { nombre: 'Historia Medieval', completado: false },
    { nombre: 'Geografía Física', completado: true },
    { nombre: 'Arte Renacentista', completado: false },
    { nombre: 'Historia Contemporánea', completado: true }
  ];

  // Columnas a mostrar en la tabla
  displayedColumns: string[] = ['nombre', 'estado'];

  // Variable para almacenar los temas filtrados
  temasFiltrados = [...this.temas];

  // Filtro seleccionado por defecto es 'todos'
  filtroSeleccionado = 'todos';

  // Método para filtrar los temas
  filtrarTemas() {
    switch (this.filtroSeleccionado) {
      case 'pendientes':
        this.temasFiltrados = this.temas.filter(tema => !tema.completado);
        break;
      case 'completados':
        this.temasFiltrados = this.temas.filter(tema => tema.completado);
        break;
      default:
        this.temasFiltrados = [...this.temas]; // Por defecto muestra todos
        break;
    }
  }
}
