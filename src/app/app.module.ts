import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
// Componentes creados
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
// Módulos necesarios
import { FormsModule } from '@angular/forms'; // Para trabajar con ngModel
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { LoadingComponent } from './loading/loading.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import { NavbarComponent } from './navbar/navbar.component';
import {MatIconModule} from '@angular/material/icon';
import { HelpMeComponent } from './help-me/help-me.component';
import { RecompensasComponent } from './recompensas/recompensas.component';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MostrarRecompensaComponent } from './mostrar-recompensa/mostrar-recompensa.component';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatBadgeModule} from '@angular/material/badge';
import { AnadirTemaComponent } from './anadir-tema/anadir-tema.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { VentanaConfirmacionComponent } from './ventana-confirmacion/ventana-confirmacion.component';
import { LottieComponent, provideLottieOptions } from 'ngx-lottie';
import player from 'lottie-web';
import { ToastrModule } from 'ngx-toastr';
import { provideToastr } from 'ngx-toastr';
import { BaseChartDirective, provideCharts, withDefaultRegisterables } from 'ng2-charts';
import { TemasGraficaComponent } from './temas-grafica/temas-grafica.component';
import { FelicitacionComponent } from './felicitacion/felicitacion.component';

export function playerFactory() {
  return player;
}


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    TaskComponent,
    LoadingComponent,
    NavbarComponent,
    HelpMeComponent,
    RecompensasComponent,
    MostrarRecompensaComponent,
    AnadirTemaComponent,
    VentanaConfirmacionComponent,
    TemasGraficaComponent,
    FelicitacionComponent ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSlideToggleModule,
    MatTabsModule,
    MatToolbarModule,
    FormsModule,  // Para trabajar con formularios y [(ngModel)]
    BrowserAnimationsModule, 
    MatProgressBarModule,
    MatProgressSpinnerModule, // Necesario para animaciones en Angular,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatTooltipModule,
    MatBadgeModule,
    MatDialogModule,
    MatCardModule,
    LottieComponent,
    MatGridListModule,
    ToastrModule,
    BaseChartDirective
  ],
  providers: [
    provideAnimationsAsync(),
    provideLottieOptions({
      player: playerFactory,
    }),
    provideToastr({
      positionClass: 'toast-bottom-center',
      closeButton: true,
    }),
    provideCharts(withDefaultRegisterables())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
