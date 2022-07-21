import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { CartService } from 'src/app/service/cart.service';
import { DetailService } from 'src/app/service/detail.service';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product=new Product();

  constructor(private detail:DetailService, private cartService:CartService) { }

  ngOnInit(): void {
  }
  sendProduct(){
    this.detail.set(this.product);
  }
  addToCart(n:string){
    window.alert("Product added to Cart")
    this.cartService.addProduct(this.product,parseInt(n))

  }

}
