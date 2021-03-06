import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { FinderRoutingModule } from './finder-routing'
import {AutocompleteLibModule} from 'angular-ng-autocomplete';
import { HttpClientModule } from '@angular/common/http';
import { ParkingsComponent } from './parkings/parkings.component';
import { AgmCoreModule } from '@agm/core';
import { SettingsService } from '../../_services/settings.service';
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
  providers:[SettingsService],
  exports: [FinderRoutingModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class FinderModule { }
