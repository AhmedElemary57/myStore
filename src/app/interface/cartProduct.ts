import { Product } from "./product";

export class CartProduct {
    product:Product
    quantity:number;
    constructor(product:Product,n:number){
        this.product=product;
        this.quantity=n;
    }
    getProuct(){
        return this.product;
    }
    
}