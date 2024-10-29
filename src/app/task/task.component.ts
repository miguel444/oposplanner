import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { Tema } from '../interfaces/tema';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AnadirTemaComponent } from '../anadir-tema/anadir-tema.component';
import { VentanaConfirmacionComponent } from '../ventana-confirmacion/ventana-confirmacion.component';
import { ToastrService } from 'ngx-toastr';
import { Recompensa } from '../interfaces/recompensa';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements AfterViewInit, OnInit, OnDestroy {

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;


  temasFiltrados = new MatTableDataSource<Tema>();

  temas = new MatTableDataSource<Tema>;

  displayedColumns: string[] = ['numero', 'nombre', 'numero_repasos', 'estado', 'acciones'];

  filtroSeleccionado = 'todos';

  recompensas: Recompensa[] = [];


  constructor(public dialog: MatDialog, private toastr: ToastrService) { }


  ngAfterViewInit() {
    this.temasFiltrados.paginator = this.paginator;
  }

  ngOnDestroy(): void {
    this.guardarTemas();
    this.guardarRecompensas();
  }

  ngOnInit(): void {
    let recompensasActualesString = localStorage.getItem('recompensas');
    let recompensasCargadas = recompensasActualesString ? JSON.parse(recompensasActualesString) : [];
    this.recompensas = recompensasCargadas;


    let temasActualesString = localStorage.getItem('temas');
    let temasCargados = temasActualesString ? JSON.parse(temasActualesString) : [];
    this.temasFiltrados = new MatTableDataSource<Tema>(temasCargados.sort((a: Tema, b: Tema) => a.numero - b.numero));;

    this.temasFiltrados.filterPredicate = (data: Tema, filter: string) => {
      if (filter === 'todos') return true;
      return filter === 'completados' ? data.completado : !data.completado;
    };
  }


  guardarTemas(): void {
    localStorage.setItem('temas', JSON.stringify(this.temasFiltrados.data));
  }

  guardarRecompensas(): void {
    localStorage.setItem('recompensas', JSON.stringify(this.recompensas));
  }


  showSuccess() {
    this.toastr.success(' Revisa la sección de premios', 'Nuevo Premio Desbloqueado 🎉', {
    });
  }


  completarTema(temaCompletado: Tema) {
    temaCompletado.completado = true;
    this.temasFiltrados.data = [...this.temasFiltrados.data];

    let numeroCompletados: number = this.temasFiltrados.data.filter(d => d.completado).length;
    this.recompensas.forEach(r => {
      if (r.temas_para_desbloquear === numeroCompletados && !r.canjeado && !r.disponible) {
          r.disponible=true;
          this.showSuccess();
      }

    });
  
  }

  borrarTema(temaAEliminar: Tema) {
    const index = this.temasFiltrados.data.indexOf(temaAEliminar);
    if (index >= 0) {
      this.temasFiltrados.data.splice(index, 1);
      this.temasFiltrados.data = [...this.temasFiltrados.data];
    }
  }

  applyFilter() {
    this.temasFiltrados.filter = this.filtroSeleccionado;
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(AnadirTemaComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.temasFiltrados.data = [...this.temasFiltrados.data, result].sort((a, b) => a.numero - b.numero);
      }
    });
  }

  openConfirmDialog(tema: Tema): void {
    const dialogRef = this.dialog.open(VentanaConfirmacionComponent, {
      data: { mensaje: '¿Estás seguro de que deseas eliminar el tema?' }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.borrarTema(tema)
      }
    });
  }

  anadirRepaso(tema: Tema): void {
    tema.repasos = (tema.repasos || 0) + 1;
    this.temasFiltrados.data = [...this.temasFiltrados.data];
  }


}


