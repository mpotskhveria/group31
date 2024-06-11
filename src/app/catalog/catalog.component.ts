import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import { Product } from '../home/product';
import { LogerService } from '../services/loger.service';

@Component({
  selector: 'fmw-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent {

  @Input() saqoneli!:  Product[] 

  @Input() monishnuli: string = '';

  constructor(private logservice: LogerService ){}

  imager(item:any){
    return '/assets/images/'+item.img
  }

  @ViewChild('name') ganacxadi!: ElementRef

  loger(){
    console.log(this.ganacxadi.nativeElement)
  }

  test(){
    this.logservice.loger()
  }

}
