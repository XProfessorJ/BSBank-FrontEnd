import { Component, OnInit } from '@angular/core';
import { CustomerEntity } from 'src/app/model/Customer';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {
  private customer:CustomerEntity[]=[{customerId:'123',customerType:'Gold',names:'ZhengJingYi',gender:'Male',prefix:''}];
  constructor() { }
  ngOnInit() {
  }
}
