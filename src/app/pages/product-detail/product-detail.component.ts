import { IProduct } from '../../core/services/products/models/product.models';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { products } from '../product-list/product-list.config';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

public products:IProduct[]=products as IProduct[];
public currentProduct?:IProduct;

  constructor(
    private activateRoute:ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.activateRoute.params.subscribe((params)=>{
      const productId=params['productId'];
      this.currentProduct=this.products.find(product=>product.id===productId);

  })
  }
}
