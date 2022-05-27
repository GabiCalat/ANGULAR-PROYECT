import { Router } from '@angular/router';
import { ProductsService } from './../../../core/services/products/products.service';
import { IProduct } from 'src/app/core/services/products/models/product.models';
import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit{

@Input() public product?:IProduct;
@Input() public editMode:boolean=false

public productForm?:FormGroup;


  constructor
   (private fb:FormBuilder,
    private productsService:ProductsService,
    private router:Router
    ){ 

    }
   
 public ngOnInit(): void {
this.productForm=this.fb.group({

  name:new FormControl(this.product? this.product.name:'',[Validators.required]),
  avatar: new FormControl(this.product? this.product.avatar:'',[Validators.required])
});
 }

    
public saveProduct(){
  console.log('entro')
    const formValue=this.productForm?.value;
    const productAdd$ =this.editMode && this.product
    ? this.productsService.editProduct(this.product.id,formValue)
      : this.productsService.addProduct(formValue);
      productAdd$.subscribe((product)=>{
        console.log(product);
        this.router.navigate(['/product-list']);
      });
  

    }
}
