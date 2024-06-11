import { Component,  OnInit } from '@angular/core';
import { Product } from './product';
import { LogerService } from '../services/loger.service';
import { ProductsService } from '../services/products.service';


@Component({
  selector: 'fmw-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent { 
  

  products: Product[]

  constructor ( private loging: LogerService, private prodsvc : ProductsService) {
    this.products = []
  }

  ngOnInit(){
    this.products = this.prodsvc.products
  }

  selectedChange: string = 'all';

  parentFilter(item:string ){
    this.selectedChange = item
  }

  testSami(){
    this.loging.loger()
  }

}
