import { Injectable } from '@angular/core';
import { Product } from '../interface/product';

@Injectable({
  providedIn: 'root'
})
export class DetailService {
  product=new Product();
  constructor() { }

  set(product:Product){
      this.product=product;
  }
  get(){
    return this.product;
  }

}
