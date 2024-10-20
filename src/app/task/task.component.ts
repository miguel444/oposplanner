import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import { Tema } from '../interfaces/tema';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AnadirTemaComponent } from '../anadir-tema/anadir-tema.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements AfterViewInit, OnInit{

  dataSource = new MatTableDataSource<Tema>();


  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<Tema>(TEMAS.sort((a, b) => a.numero - b.numero));
  }

  constructor(public dialog: MatDialog) {}


  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  // Columnas a mostrar en la tabla
  displayedColumns: string[] = ['numero','nombre', 'estado','acciones'];
;

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

    // Método para abrir el diálogo
    openDialog(): void {
      const dialogRef = this.dialog.open(AnadirTemaComponent);
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.dataSource.data = [...this.dataSource.data,result].sort((a, b) => a.numero - b.numero);
        }
      });
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
