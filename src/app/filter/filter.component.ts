import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LogerService } from '../services/loger.service';

@Component({
  selector: 'fmw-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  constructor( private logsvc: LogerService ){}

  @Input('yvela') all: number = 0
  @Input() low: number = 0
  @Input() avg: number = 0
  @Input() high: number = 0

  selectedCategory: string = 'all';

  @Output() onSelect: EventEmitter<string> = new EventEmitter<string>()

  filterCategory(){
    this.onSelect.emit(this.selectedCategory)
  }

 testOri(){
  this.logsvc.loger()
 }
}
