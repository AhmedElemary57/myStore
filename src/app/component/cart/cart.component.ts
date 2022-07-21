import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CartProduct } from 'src/app/interface/cartProduct';
import { CartService } from 'src/app/service/cart.service';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { DetailService } from 'src/app/service/detail.service';
import { FormControl, FormGroup, Validators,FormControlName } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validator } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { NgModel } from '@angular/forms';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cartProducts$ = new BehaviorSubject<CartProduct[]>([]);
  @Output() onDeleteProduct: EventEmitter<CartProduct> =new EventEmitter();
  totalPrice=0;
  myForm:FormGroup = new FormGroup('');


  constructor( private fb:FormBuilder,private detail:DetailService ,private cartService:CartService) { }
  
  ngOnInit(): void {
    console.log(this.cartService.cartProduct[0])
    this.cartProducts$=this.cartService.cartProduct$
    this.totalPrice=Math.round(this.cartService.totalPrice*100)/100;  
    this.totalPrice = parseFloat( this.totalPrice.toFixed(2));

    this.myForm=new FormGroup({
      name: new FormControl('',[Validators.required ,Validators.minLength(3)]),
      adress: new FormControl('',[Validators.required,Validators.minLength(6)]),
      ccNumber:new FormControl('',[Validators.required,Validators.minLength(16),Validators.maxLength(16),Validators.pattern("^[0-9]*$")])
    })

    this.myForm.valueChanges.subscribe(data=>{
      this.cartService.setName(data.name)
    })
    console.log(this.myForm)
  }

  sendProduct(p :CartProduct){
    this.detail.set(p.product);
  }
  removeCart(p:CartProduct){
    window.alert(p.product.name +" removed from cart")
    this.cartService.removeProduct(p.product.id)
    this.cartProducts$=this.cartService.cartProduct$
    this.totalPrice=Math.round(this.cartService.totalPrice*100)/100;
  }
  changeEvent(amount:string,p:CartProduct){
    this.totalPrice-=Math.round(p.quantity*p.product.price*100)/100;
    
    p.quantity=parseInt(amount)
    this.totalPrice+= Math.round(p.quantity*p.product.price*100)/100;
    this.cartService.totalPrice=this.totalPrice;
    this.totalPrice = parseFloat( this.totalPrice.toFixed(2));
    if(p.quantity==0){
      this.removeCart(p);
    }
  } 
  isValid(){
    if(this.myForm.valid){
      console.log("Done")
      console.log(RouterLink)

      this.cartService.name=this.myForm.value.name
      console.log(this.cartService.name)
      this.cartService.cartProduct=[]
      this.myForm.reset()
    }else{
      window.alert("There is an error")
      console.log("There is an error")

    }

  }

  get name(){
    return this.myForm.get('name')
  }
  get adress(){
    return this.myForm.get('adress')
  } get ccNumber(){ 
    return this.myForm.get('ccNumber')
  }
}
