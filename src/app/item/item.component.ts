import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '../services/products.service';
import { filter } from 'rxjs';

@Component({
  selector: 'fmw-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {

  item: any
  itemID: number = 0;

  constructor (private activeRoute : ActivatedRoute, private products: ProductsService) {}
  imager(item:any){
    return '/assets/images/'+item.img
  }

  ngOnInit(){
    this.activeRoute.params.subscribe({
      next: (data) => { this.itemID = +data['id']
       }
    })

    this.products.test$.subscribe({
      next: data => {
        this.item = data.find((item: any)=>{return item.id === this.itemID })
      }
    })
    
  }

  

}
