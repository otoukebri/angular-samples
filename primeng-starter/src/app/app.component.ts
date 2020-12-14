import { Component, OnInit } from '@angular/core';
import { CarService } from './services/carservice';
import { SelectItem } from 'primeng/components/common/selectitem';

export interface City {
  name: string;
  code: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CarService]
})
export class AppComponent implements OnInit {

  cities1: any;
  selectedCity1: any;


  constructor() {

    this.cities1 = [
      { label: 'Select City', value: null },
      { label: 'New York', value: { id: 1, name: 'New York', code: 'NY' } },
      { label: 'Rome', value: { id: 2, name: 'Rome', code: 'RM' } },
      { label: 'London', value: { id: 3, name: 'London', code: 'LDN' } },
      { label: 'Istanbul', value: { id: 4, name: 'Istanbul', code: 'IST' } },
      { label: 'Paris', value: { id: 5, name: 'Paris', code: 'PRS' } }
    ];
  }
  ngOnInit() {
     this.selectedCity1 = { id: 3, name: 'London', code: 'LDN' } ;
  }

}
