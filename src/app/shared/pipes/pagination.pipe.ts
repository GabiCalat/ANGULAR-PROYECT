import { Pipe, PipeTransform } from '@angular/core';
import { IProduct } from 'src/app/core/services/products/models/product.models';

const LIMIT_PAGE=6


@Pipe({
  name: 'pagination',
  pure:false
})
export class PaginationPipe implements PipeTransform {

  transform(value: IProduct[], page: number): IProduct[] {
    const init= page*LIMIT_PAGE;
    const end=(page+1)*LIMIT_PAGE;
    return value.slice(init,end);



    }
  }
  


