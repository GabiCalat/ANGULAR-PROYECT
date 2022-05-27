import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './components/filter/filter.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PaginationPipe } from './pipes/pagination.pipe';
import { FormComponent } from './components/form/form.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FilterComponent,
    FilterPipe,
    PaginationPipe,
    FormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
FilterComponent,
FilterPipe,
FormComponent,
PaginationPipe

  ]
})
export class SharedModule { }
