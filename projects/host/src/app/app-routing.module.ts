import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'mf2',
    loadChildren: () => import('mf/InfoModule').then((m)=>m.InfoModule)
  },
  {
    path: 'mf2/:id',
    loadChildren: () => import('mf/InfoModule').then((m)=>m.InfoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
