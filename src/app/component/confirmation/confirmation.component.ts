import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  totalPrice:number=0;
  name:string=''
  constructor(private cartService:CartService) { }

  ngOnInit(): void {
    this.totalPrice=this.cartService.totalPrice;
    this.name=this.cartService.name;
    this.cartService.cartProduct=[];
    this.cartService.totalPrice=0;
    this.cartService.name=''
  }

}
