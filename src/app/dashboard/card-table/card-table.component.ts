import { Component, OnInit } from '@angular/core';
import { CustomerEntity } from 'src/app/model/Customer';
import { CustomerService } from 'src/app/service/customer-service';
import { Router } from '@angular/router';
import { CreditCard } from 'src/app/model/CreditcardEntity';
import { SavingCard } from 'src/app/model/SavingAccount';
import {Account} from 'src/app/model/Account'
import { CardEntity } from 'src/app/model/CardEntity';
import { TransRecordEntity } from 'src/app/model/TransRecordEntity';

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
  private cardList:Array<CardEntity[]>=new Array;;
  private container;
  private transactionRecords:TransRecordEntity[];
  private totalPage:Array<number>=new Array;
  private pageNumber;
  private cardId;
  constructor(
    private customerService:CustomerService,
    private router: Router,
  ) { }

  ngOnInit() {
    this.getAllCustomerAccounts();
    // this.getCreditCards();
  }

  getCreditCards(){
    for(var i in this.accounts){
      console.log(this.accounts[i].accountId);
      this.customerService.queryCustomerCards(this.accounts[i].accountId).subscribe(data=>{
        this.creditCards=data['cards']['creditcards'];  
        this.savingCards=data['cards']['savingcards'];
     });
    }
  }   

  getAllCustomerAccounts(){
    this.customerService.allCustomerAccounts().subscribe(data=>{
      this.accounts=data['accounts'];
      this.customer=data['customer'];
      for(var i in this.accounts){
        this.customerService.queryCustomerCards(this.accounts[i].accountId).subscribe(data=>{
          this.cardList.push(data);//to use id for index may cause the problem of perfomance
          console.log();
        });
      }
    });
  }
  getTransactionRecords(cardId,pageNumber){
    if(cardId==null){
      cardId=this.cardId;
    }
    else{
      this.cardId=cardId;
    }
    this.customerService.queryTransactionRecords(cardId,pageNumber,5).subscribe(data=>{
      this.transactionRecords=data['list'];
      var totalPage=data['totalRows'];
      if(totalPage%5>0){
        totalPage=totalPage/5+1;
      }
      else{
        totalPage=totalPage/5;
      }
      this.totalPage=new Array;
      for(var i =1;i<=totalPage;i++){
        this.totalPage.push(i);
        console.log(this.totalPage)
      }
    });
  }
  test(){
    this.customerService.queryTransactionRecords(1,1,1).subscribe(
      data=>{
          
      }
    );

  }
}