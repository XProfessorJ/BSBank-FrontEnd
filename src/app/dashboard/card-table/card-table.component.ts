import { Component, OnInit } from '@angular/core';
import { CustomerEntity } from 'src/app/model/Customer';
import { CustomerService } from 'src/app/service/customer-service';
import { Router } from '@angular/router';
import { CreditCard } from 'src/app/model/CreditcardEntity';
import { SavingCard } from 'src/app/model/SavingAccount';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {
  private accounts:Account[];
  private customer:CustomerEntity;
  private creditCards:CreditCard[];
  private savingCards:SavingCard[];
  private investmentCards;
  constructor(
    private customerService:CustomerService,
    private router: Router,
  ) { }
  ngOnInit() {
    this.customerService.allCustomerAccounts().subscribe(data=>{
      this.accounts=data['accounts'];
      this.customer=data['customer'];
    });
    this.getCreditCards();
  }
  test(){
    alert("this.customer.customerId");
  }
  getCreditCards(){
    console.log('getCreditCards');
    this.customerService.queryCustomerCards('123').subscribe(data=>{
        this.creditCards=data['cards']['creditcards'];
        this.savingCards=data['cards']['savingcards'];
    });
}   
}