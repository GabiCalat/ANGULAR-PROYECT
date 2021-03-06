import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list.component';
import { ProductComponent } from './product/product.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProductListRoutingModule } from './product-list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent


  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ProductListRoutingModule,
    SharedModule,
    
  ]
})
export class ProductListModule { }
