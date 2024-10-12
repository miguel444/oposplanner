import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// Componentes creados
import { HomeComponent } from './home/home.component';
import { TaskComponent } from './task/task.component';
import { ProgressComponent } from './progress/progress.component';

// Módulos necesarios
import { FormsModule } from '@angular/forms'; // Para trabajar con ngModel
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Angular Calendar
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

// Ngx-Charts para el gráfico de progreso
import { NgxChartsModule } from '@swimlane/ngx-charts';

// Date-fns para las fechas en el calendario
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
registerLocaleData(localeEs);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TaskComponent,
    ProgressComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  // Para trabajar con formularios y [(ngModel)]
    BrowserAnimationsModule,  // Necesario para animaciones en Angular
    NgxChartsModule,  // Módulo para gráficos
    CalendarModule.forRoot({ provide: DateAdapter, useFactory: adapterFactory }) // Módulo para el calendario
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
