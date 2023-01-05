import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pagina01Component } from './pagina01/pagina01.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    Pagina01Component
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    Pagina01Component
  ],
})
export class DirectivasModule { }
