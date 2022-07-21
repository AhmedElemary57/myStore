import { Injectable } from '@angular/core';
import { CartProduct } from '../interface/cartProduct';
import { Product } from '../interface/product';
import { BehaviorSubject, Observable } from 'rxjs';
import { CartComponent } from '../component/cart/cart.component';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartProduct:CartProduct[]=[];
  cartProduct$ =new BehaviorSubject<CartProduct[]>([]);
  totalPrice=0;
  private flag=true;
  name='';
  constructor() { }

  addProduct(product:Product,n:number){
    const c=new CartProduct(product,n);
    for (let index = 0; index < this.cartProduct.length; index++) {
      if(c.product.id===this.cartProduct[index].product.id){
        this.cartProduct[index].quantity+=c.quantity;
        this.totalPrice += n*product.price;
        return;
      }
    }
    this.cartProduct.push(c);
    this.cartProduct$.next(this.cartProduct);
    this.totalPrice+=n*product.price;
  }
  removeProduct(id :number ){
    for (let index = 0; index < this.cartProduct.length; index++) {

      if(this.cartProduct[index].product.id===id){
          this.totalPrice -= this.cartProduct[index].quantity *this.cartProduct[index].product.price;
          console.log(this.cartProduct);

          if (index !== -1) {
            this.cartProduct.splice(index, 1);
          }    
          console.log(this.cartProduct);
          this.cartProduct$.next(this.cartProduct);
        }   
    
  }
  }
  setName(name:string){
    console.log(name)
    this.name=name;
  }

}
