import { products } from './../product-list/product-list.config';
import { ProductsService } from './../../core/services/products/products.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { switchMap, Observable } from 'rxjs';
import { IProduct } from 'src/app/core/services/products/models/product.models';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.scss']
})
export class EditProductComponent implements OnInit {
  
public product?: IProduct;
  constructor(private activatedRoute: ActivatedRoute,
              private productsService:ProductsService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params)=>{
      const productId=params['productId'];
      this.productsService.getProductById(productId).subscribe((product)=>{
        this.product=product;
      });
    })
    
 }
}