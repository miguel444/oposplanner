import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { HelpMeComponent } from './help-me/help-me.component';
import { RecompensasComponent } from './recompensas/recompensas.component';
import { TaskComponent } from './task/task.component';

const routes: Routes = [
  { path: 'inicio', component: HomeComponent },
  { path: '', component: LoadingComponent },
  { path: 'ayuda', component: HelpMeComponent },
  { path: 'recompensas', component: RecompensasComponent },
  { path: 'temas', component: TaskComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
