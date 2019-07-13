import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { logger } from 'codelyzer/util/logger';
import { log } from 'util';
import { catchError } from 'rxjs/operators';
import { callHooks } from '@angular/core/src/render3/hooks';
import { UserLogin } from '../model/UserLogin';

const httpOptions = {
  headers: new HttpHeaders({'content-Type': 'application/json','async':'false'})
};
@Injectable({
  providedIn: 'root'
})
export class BankService {
    private customerUrl = 'http://127.0.0.1:8769';
    constructor(private httpClient: HttpClient) {}
    userLogin(userId:string,password:string): Observable<UserLogin> {
        return this.httpClient.post<UserLogin>(this.customerUrl + '/authrization',{userId,password}as UserLogin ,httpOptions);
    }
}
