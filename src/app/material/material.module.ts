import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCheckboxModule} from '@angular/material/checkbox'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatAutocompleteModule} from '@angular/material/autocomplete'; 
import {MatChipsModule} from '@angular/material/chips'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatChipsModule
  ],
  exports: [
    MatCheckboxModule,
    MatCardModule,
    MatButtonModule,
    MatAutocompleteModule,
    MatChipsModule
  ]
})
export class MaterialModule { }
