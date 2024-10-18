import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { Tema } from '../interfaces/tema';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements AfterViewInit{

  dataSource = new MatTableDataSource<Tema>(TEMAS.sort((a, b) => a.numero - b.numero));

  // Listado de temas (simulado con algunos datos)


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Columnas a mostrar en la tabla
  displayedColumns: string[] = ['numero','nombre', 'estado','acciones'];

  // Variable para almacenar los temas filtrados
  temasFiltrados = [...this.dataSource.data];

  // Filtro seleccionado por defecto es 'todos'
  filtroSeleccionado = 'todos';

  completarTema(temaCompletado: Tema) {
    temaCompletado.completado = true; 
    this.dataSource.data = [...this.dataSource.data]; 
  }

  borrarTema(temaAEliminar: Tema) {
    const index = this.dataSource.data.indexOf(temaAEliminar);
    if (index >= 0) {
      this.dataSource.data.splice(index, 1);  // Remueve el tema de la lista
      this.dataSource.data = [...this.dataSource.data];  // Refresca la tabla
    }  }

  filtrarTemas() {
    switch (this.filtroSeleccionado) {
      case 'pendientes':
        this.dataSource.data = TEMAS.filter(tema => !tema.completado);
        break;
      case 'completados':
        this.dataSource.data = TEMAS.filter(tema => tema.completado);
        break;
      default:
        this.dataSource.data = TEMAS; 
        break;
    }
  }

  
}

const TEMAS: Tema[] = [
  {numero:1, nombre: 'Historia Medieval', completado: false },
  {numero:2, nombre: 'Geografía Física', completado: true },
  {numero:3, nombre: 'Arte Renacentista', completado: false },
  {numero:4, nombre: 'Historia Contemporánea', completado: true },
  {numero:5, nombre: 'Historia Medieval', completado: false },
  {numero:43, nombre: 'Geografía Física', completado: true },
  {numero:7, nombre: 'Arte Renacentista', completado: false },
  {numero:8, nombre: 'Historia Contemporánea', completado: true },
  {numero:9, nombre: 'Historia Medieval', completado: false },
  { numero:10,nombre: 'Geografía Física', completado: true },
  {numero:11, nombre: 'Arte Renacentista', completado: false },
  {numero:32, nombre: 'Historia Contemporánea', completado: true },
  {numero:13, nombre: 'Historia Medieval', completado: false },
  { numero:14,nombre: 'Geografía Física', completado: true },
  {numero:15, nombre: 'Arte Renacentista', completado: false },
  {numero:16, nombre: 'Historia Contemporánea', completado: true }
];
