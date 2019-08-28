import { Component, OnInit } from '@angular/core';
import { CustomerEntity } from 'src/app/model/Customer';
import { CustomerService } from 'src/app/service/customer-service';
import { Router } from '@angular/router';
import { CreditCard } from 'src/app/model/CreditcardEntity';
import { SavingCard } from 'src/app/model/SavingAccount';
import { Account } from 'src/app/model/Account'
import { CardEntity } from 'src/app/model/CardEntity';
import { TransRecordEntity } from 'src/app/model/TransRecordEntity';

import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit {
  private accounts: Account[];
  private customer: CustomerEntity;
  private creditCards: CreditCard[];
  private savingCards: SavingCard[];
  private investmentCards;
  private cardList: Array<CardEntity[]> = new Array;;
  private container;
  private transactionRecords: TransRecordEntity[];
  private totalPage: Array<number> = new Array;
  private pageNumber;
  private cardId;
  private sayHello;
  private actionInfo;
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private http:HttpClient
  ) { }

  ngOnInit() {
    this.getAllCustomerAccounts();
    // this.getCreditCards();
    let date = new Date();
    if (date.getHours() < 12 && date.getHours() > 6) {
      this.sayHello = "Good Morning,";
    }
    if (12 < date.getHours() && date.getHours() < 18) {
      this.sayHello = "Good Afternoon,";
    }
    if (18 < date.getHours() && date.getHours() < 22) {
      this.sayHello = "Good Evening,";
    }
    if (22 < date.getHours() || date.getHours() < 6) {
      this.sayHello = "Good Night,";
    }

    this.http.get('assets/json/action.json').subscribe(
       data=>{this.actionInfo=data;}
    );

  }

  greyClose(){
    document.getElementById("greyClose").style.display="inline-block";
    document.getElementById("redClose").style.display="none";
  }

  redClose(){
    document.getElementById("redClose").style.display="inline-block";
    document.getElementById("greyClose").style.display="none";
  }

  actionCancel(){
    document.getElementById("actionInfo").style.display="none";
  }


  getCreditCards() {
    for (var i in this.accounts) {
      console.log(this.accounts[i].accountId);
      this.customerService.queryCustomerCards(this.accounts[i].accountId).subscribe(data => {
        this.creditCards = data['cards']['creditcards'];
        this.savingCards = data['cards']['savingcards'];
      });
    }
  }

  getAllCustomerAccounts() {
    this.customerService.allCustomerAccounts(localStorage.getItem('customerId')).subscribe(data => {
      this.accounts = data['accounts'];
      this.customer = data['customer'];
      for (let i in this.accounts) {
        this.customerService.queryCustomerCards(this.accounts[i].accountId).subscribe(data => {
          this.cardList.push(data);//to use id for index may cause the problem of perfomance
          console.log();
        });
      }
    });
  }
  getTransactionRecords(cardId, pageNumber) {
    if (cardId == null) {
      cardId = this.cardId;
    }
    else {
      this.cardId = cardId;
    }
    if(pageNumber==null){
      pageNumber=0
    }
    this.customerService.queryTransactionRecords(cardId, pageNumber, 5).subscribe(data => {
      this.transactionRecords = data['list'];
      let totalPage = data['totalRows'];
      if (totalPage % 5 > 0) {
        totalPage = totalPage / 5 + 1;
      }
      else {
        totalPage = totalPage / 5;
      }
      this.totalPage = new Array;
      for (let i = 1; i <= totalPage; i++) {
        this.totalPage.push(i);
        console.log(this.totalPage);
      }
    });
  }


  
}