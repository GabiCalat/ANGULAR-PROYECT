import { products } from './../../../pages/product-list/product-list.config';
import {IProduct } from './models/product.models';
import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private httpClient:HttpClient) { }

  public getProducts():Observable<IProduct[]>{
    
    return this.httpClient.get<IProduct[]>(`${environment.apiUrl}products2`)
  }

  public getProductById(idProduct: string): Observable<IProduct> {
    return this.httpClient.get<IProduct>(`${environment.apiUrl}products2/${idProduct}`);
  }

  public addProduct(body:IProduct):Observable<IProduct>{
    return this.httpClient.post<IProduct>(

      `${environment.apiUrl}products2`,
      body

    )

}

public editProduct(idProduct:string,body:IProduct):Observable<IProduct>{
  return this.httpClient.put<IProduct>(

    `${environment.apiUrl}products2/${idProduct}`,
    body

  )

}
public deleteProduct(idProduct:string):Observable<IProduct>{

  return this.httpClient.delete<IProduct>(`${environment.apiUrl}products2/${idProduct}`);
}
 




}