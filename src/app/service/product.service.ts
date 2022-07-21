import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../interface/product';
import { BehaviorSubject, Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private product:Product[]=[];
  private product$=new BehaviorSubject<Product[]>([])
  
  constructor(private http:HttpClient) { 

  }

  loadData(){
    this.http.get<Product[]>('./assets/data.json').subscribe(data=>{
      this.product=data;
      console.log(data);
      this.product$.next(this.product);
    })
    
  }
  
  getProducts(): Observable<Product[]>{
    this.loadData();
    return this.product$.asObservable();
  }
}
