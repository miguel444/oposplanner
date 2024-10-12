import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProgressComponent } from './progress/progress.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'progress', component: ProgressComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
