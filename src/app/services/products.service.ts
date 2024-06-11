import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class ProductsService {
  products = [
    {
      id: 1,
      name: 'Georgian Wine',
      category: 'food',
      price: 100,
      img: 'test.webp',
      available:true
    },

    {
      id: 2,
      name: 'GeoPhone',
      category: 'tec',
      price: 500,
      img: 'phone.webp',
      available:false
    },

    {
      id: 3,
      name: 'GeoOil',
      category: 'oil',
      price: 15,
      img: 'oil.jpg',
      available:true
    },

    {
      id: 4,
      name: 'GeoBread',
      category: 'food',
      price: 50,
      img: 'bread.jpg',
      available:false
    },

    {
      id: 5,
      name: 'GeoCheese',
      category: 'food',
      price: 250,
      img: 'cheese.webp',
      available:true
    }
  ]
  constructor() { }

  test$: Observable<any> = new Observable<any>((observer)=>{
    observer.next(this.products)
  })

}
