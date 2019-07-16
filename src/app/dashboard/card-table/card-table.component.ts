import { Component, OnInit } from '@angular/core';
import { CustomerEntity } from 'src/app/model/Customer';
import { CustomerService } from 'src/app/service/customer-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {
  private accounts:Account[];
  private customer:CustomerEntity;
  constructor(
    private customerService:CustomerService,
    private router: Router,
  ) { }
  ngOnInit() {
    this.customerService.allCustomerAccounts().subscribe(data=>{
      this.accounts=data['accounts'];
      this.customer=data['customer'];
    });
    
  }
  test(){
    alert(this.customer.customerId);
  }
  
}
