import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
  },
  {
    path: 'mf',
    loadChildren: () => import('./info/info.module').then((m)=>m.InfoModule)
  },
  {
    path: 'mf/:id',
    loadChildren: () => import('./info/info.module').then((m)=>m.InfoModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
