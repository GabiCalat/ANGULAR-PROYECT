import { IProduct } from './../../core/services/products/models/product.models';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: IProduct[], criteria: string): IProduct[] {
    return value.filter(product=>{
      return product.name.toLowerCase().includes(criteria.toLowerCase());
      });
      
  }

}
