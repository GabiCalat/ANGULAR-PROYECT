import { ProductsService } from './../../core/services/products/products.service';
import { MessageService} from '../../core/services/message/message.service';
import { IProduct } from '../../core/services/products/models/product.models';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public products?:IProduct[]
  public canModify: boolean=false;
  public filterValue:string="";
  public message:string='';
  public page:number=0;

  constructor(
              private messageService:MessageService,
              private productsService:ProductsService
  ){}
            

  ngOnInit(): void {

    this.getProducts()
        
    
  }
  public onModify(){

    this.canModify=!this.canModify;
  }

  public onDelete(id:string){

    this.productsService.deleteProduct(id).subscribe((product)=>{
      console.log('Eliminado',product);
    this.getProducts()
  });
  }


public sendMessage(){
  this.messageService.setMessage(this.message);
  this.message='';


}
private getProducts(){
  this.productsService.getProducts().subscribe((products)=>{
    this.products=products;
    
  })

}
   
}
