import { Component, OnInit } from '@angular/core';
import { Product } from '../Model/Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  Productname:string[]=["Samsumg","apple","Xiaomi","Motorola"];
  Price:number=100000;
  Quantity:number=180;
  mfd:Date=new Date();
  amount:number=this.Price*this.Quantity;
  products:Product[]=[
    {productname:'HP',price:150000,mfd:new Date(1,2,2021),quantity:25},
    {productname:'Dell',price:175000,mfd:new Date(1,2,2022),quantity:95},
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
