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


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    TaskComponent,
    LoadingComponent,
    NavbarComponent,
    HelpMeComponent,
    RecompensasComponent,  ],
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
    MatTableModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
