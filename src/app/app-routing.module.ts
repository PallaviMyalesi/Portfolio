import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MusicProjectComponent } from './music-project/music-project.component';

const routes: Routes = [
  { path: 'projects/music', component:MusicProjectComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
