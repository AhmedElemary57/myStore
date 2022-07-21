import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interface/product';
import { Output  } from '@angular/core';
import { Input } from '@angular/core';
import { DetailService } from 'src/app/service/detail.service';
import { CartService } from 'src/app/service/cart.service';
@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  product=new Product();

  constructor(private detail:DetailService, private cartService:CartService) { }

  ngOnInit(): void {
    this.product=this.detail.product
    console.log(this.product)

  }
  addToCart(n:string){
    window.alert("Product added to Cart")
    this.cartService.addProduct(this.product,parseInt(n))

  }

}
