import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InfoRoutingModule } from './info-routing.module';
import { InfoComponent } from './info.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    InfoComponent
  ],
  imports: [
    CommonModule,
    InfoRoutingModule,
    RouterModule,
    HttpClientModule
  ]
})
export class InfoModule { }
