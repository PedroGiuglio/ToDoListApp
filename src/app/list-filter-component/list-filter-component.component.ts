import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-list-filter-component',
  templateUrl: './list-filter-component.component.html',
  styleUrls: ['./list-filter-component.component.css']
})
export class ListFilterComponentComponent {
  @Input() campo: any;
  @Output() toggleClase = new EventEmitter<any>();
}
