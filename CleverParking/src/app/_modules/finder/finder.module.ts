import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FinderRoutingModule } from './finder-routing'


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    FinderRoutingModule
  ],
  exports: [FinderRoutingModule]
})
export class FinderModule { }
