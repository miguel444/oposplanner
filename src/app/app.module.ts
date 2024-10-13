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
import { SpinnerComponent } from './spinner/spinner.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';


@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    HomeComponent,
    TaskComponent,
    SpinnerComponent,  ],
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
    MatButtonModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
