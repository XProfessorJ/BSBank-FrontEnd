import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { UserLogin } from '../model/UserLogin';

const httpOptions = {
  headers: new HttpHeaders({'content-Type': 'application/json','async':'false'})
};
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
    private customerUrl = 'http://127.0.0.1:8769';
    constructor(private httpClient: HttpClient) {}
    userLogin(userId:string,password:string): Observable<UserLogin> {
        alert("this is CustomerService:userLogin"+userId+" "+password);
        return null;
        // return this.httpClient.post<UserLogin>(this.customerUrl + '/authrization',{userId,password}as UserLogin ,httpOptions);
    }
}
