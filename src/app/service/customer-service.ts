import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserLogin } from '../model/UserLogin';
import { TokenEntity } from '../model/TokenEntity';
import { AccountWithTokenEntity } from '../model/AccountWithTokenEntity';

const httpOptions = {
  headers: new HttpHeaders({'content-Type': 'application/json','async':'false','Access-Control-Allow-Origin':'*'})
};
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    private customerUrl = 'http://127.0.0.1:8769';
    constructor(private httpClient: HttpClient) {}
    userLogin(phone:string,password:string): Observable<any> {
        return this.httpClient.post<any>(this.customerUrl + '/authrization/login',
        {phone,password} as UserLogin ,httpOptions)
    }
    allCustomerAccounts():Observable<any>{//拿用户所有的Account
      var token=localStorage.getItem('token');
      return this.httpClient.post<any>(this.customerUrl + '/customer/customerDashboard',
      {token} ,httpOptions)
      // return this.httpClient.get(this.customerUrl+'/customer/customerDashboard');
    }
    queryCustomerCards(accountId:string):Observable<any>{//查询单个账户下的所有卡
      var token=localStorage.getItem('token');
      return this.httpClient.post<any>(this.customerUrl + '/account/queryCards',
      {accountId,token} as AccountWithTokenEntity,httpOptions)
    }
}
