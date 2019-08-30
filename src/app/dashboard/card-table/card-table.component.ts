import { Component, OnInit ,OnDestroy} from '@angular/core';
import { CustomerEntity } from 'src/app/model/Customer';
import { CustomerService } from 'src/app/service/customer-service';
import { Router } from '@angular/router';
import { CreditCard } from 'src/app/model/CreditcardEntity';
import { SavingCard } from 'src/app/model/SavingAccount';
import { Account } from 'src/app/model/Account'
import { CardEntity } from 'src/app/model/CardEntity';
import { TransRecordEntity } from 'src/app/model/TransRecordEntity';
import {ActivatedRoute, NavigationEnd} from '@angular/router';
import { Location } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.css']
})
export class CardTableComponent implements OnInit, OnDestroy {
  private accounts: Account[];
  private customer: CustomerEntity;
  private creditCards: CreditCard[];
  private savingCards: SavingCard[];
  private investmentCards;
  private cardList: Array<CardEntity[]> = new Array;
  private accountList:Array<Account[]> = new Array;
  private container;
  private transactionRecords: TransRecordEntity[];
  private totalPage: Array<number> = new Array;
  private pageNumber;
  private cardId;
  private sayHello;
  private actionInfo;
  navigationSubscription;
  
  
  constructor(
    private customerService: CustomerService,
    private router: Router,
    private http:HttpClient,
    private route:ActivatedRoute,
    private location: Location
  ) { 
    this.navigationSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.initLoad(event);
      }
    });
  }

  initLoad(e) {
    window.scrollTo(0, 0);
    console.log(e);
  }

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

  ngOnDestroy(): void {
    // 销毁navigationSubscription，避免内存泄漏
    if (this.navigationSubscription) {
      this.navigationSubscription.unsubscribe();
    }
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
         // this.cardList.push(data['cards']);//to use id for index may cause the problem of perfomance 
         this.cardList.push(data); 

         //console.log("cardList::::::::::::",this.cardList[0]['account'].accountType);
         //console.log("cars!!!!!!!!!!",this.cardList[0]['cards']['creditcards'][0].accountNickname);
         // this.accountList.push(data['account']);
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

  //
  changeCardStatus(cardId){
    
    this.customerService.changeCardStatus(cardId).subscribe(
      data=>{
        console.log("**************"+data);
        let flag=data;
         if(flag=="1"){
          // window.location.reload();
          //     this.router.navigate(['/dashboard'],{
          //       queryParams: {refresh: new Date().getTime()}
          //     });
          // this.router.navigate(['/dashboard']);
          location.reload(); 
         }else{
            alert("You don't have the permissions");
         }
      }
    );
  }
  
}