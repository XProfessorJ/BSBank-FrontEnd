import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { AccountWithTokenEntity } from '../model/AccountWithTokenEntity';
import { CardIdWithTokenEntity } from '../model/CardIdWithTokenEntity';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private result;

  httpOptions = {
    headers: new HttpHeaders({ 'content-Type': 'application/json', 'async': 'false', 'Access-Control-Allow-Origin': '*', 'token': localStorage.getItem('token') })
  };
  private customerUrl = 'http://127.0.0.1:8769';
  constructor(private httpClient: HttpClient) { }
  userLogin(phone: string, password: string): Observable<any> {
    return this.httpClient.post<any>(this.customerUrl + '/authrization/login',
      { phone, password } as UserLogin, this.httpOptions);
  }

  allCustomerAccounts(customerId): Observable<any> {//拿用户所有的Account
    // var token = localStorage.getItem('token');
    return this.httpClient.get(this.customerUrl + '/customer/customer/' + customerId, this.httpOptions);

    // return this.httpClient.get(this.customerUrl+'/customer/customerDashboard');
  }

  queryCustomerCards(accountId: string): Observable<any> {//查询单个账户下的所有卡
    // var token = localStorage.getItem('token');
    //返回的是account
    return this.httpClient.get(this.customerUrl + '/account/account/' + accountId, this.httpOptions)
    //返回的是cards
    //return this.httpClient.get(this.customerUrl + "/card/cards/" + accountId, this.httpOptions);
  }
  queryTransactionRecords(cardId, pagenum, pagerow): Observable<any> {
    var token = localStorage.getItem('token');
    return this.httpClient.get(this.customerUrl + '/account/Transrecords/' + cardId + "/" + pagenum + "/" + pagerow, this.httpOptions);
  }

  //更改状态
  changeCardStatus(cardId: string): Observable<any> {
    return this.httpClient.put(this.customerUrl + '/card/cardstatus/' + cardId, null, this.httpOptions);
  }

  testForGetRequest(): Observable<any> {
    return this.httpClient.get(this.customerUrl + '/testForGetRequest?testString=123', this.httpOptions);
  }
}
