import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Tema } from '../interfaces/tema';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AnadirTemaComponent } from '../anadir-tema/anadir-tema.component';
import { VentanaConfirmacionComponent } from '../ventana-confirmacion/ventana-confirmacion.component';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements AfterViewInit, OnInit, OnDestroy {

  dataSource = new MatTableDataSource<Tema>();

  constructor(public dialog: MatDialog) { }


  ngOnInit(): void {
    let temasActualesString = localStorage.getItem('temas');
    let temasCargados = temasActualesString ? JSON.parse(temasActualesString) : [];
    this.dataSource = new MatTableDataSource<Tema>(temasCargados.sort((a:Tema, b:Tema) => a.numero - b.numero));
  }



  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.guardarRecompensas();
  }

  guardarRecompensas(): void {
    localStorage.setItem('temas', JSON.stringify(this.dataSource.data));
  }

  // Columnas a mostrar en la tabla
  displayedColumns: string[] = ['numero', 'nombre', 'numero_repasos', 'estado', 'acciones'];
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
    }
  }

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
        this.dataSource.data = [...this.dataSource.data, result].sort((a, b) => a.numero - b.numero);
      }
    });
  }

  openConfirmDialog(tema: Tema): void {
    const dialogRef = this.dialog.open(VentanaConfirmacionComponent, {
      data: { mensaje: '¿Estás seguro de que deseas eliminar el tema?' } // Personaliza el mensaje aquí
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.borrarTema(tema)
      } 
    });
  }

  anadirRepaso(tema: Tema): void {
    tema.repasos = (tema.repasos || 0) + 1;
    this.dataSource.data = [...this.dataSource.data];
  }


}

const TEMAS: Tema[] = [
  {numero: 3, nombre:"Historia", completado: false},
  {numero: 4, nombre:"Geografia", completado: true},

];
