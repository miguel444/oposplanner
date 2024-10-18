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
    MostrarRecompensaComponent,  ],
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
    MatTooltipModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
