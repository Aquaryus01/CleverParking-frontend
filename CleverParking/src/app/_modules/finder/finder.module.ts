import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FinderRoutingModule } from './finder-routing'
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { ParkingsComponent } from './parkings/parkings.component';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [MainComponent, ParkingsComponent],
  imports: [
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBEgEtjNunnLyyIBVO0ZlCh3gReySJZhkQ'
    }),

    CommonModule,
    FinderRoutingModule,
    AutocompleteLibModule,
    HttpClientModule,
  ],
  exports: [FinderRoutingModule]
})
export class FinderModule { }
