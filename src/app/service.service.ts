import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
 
export class ServiceService {
  headers=new HttpHeaders({"apikey":"cxegOjuJNKtTxgZMjTZ23HAHBw6OYOmh"})
  constructor(private httpclient: HttpClient) { }
  symbols(){

    const headers =this.headers
    return this.httpclient.get(`${environment.apiURL}symbols`,{headers})

  }
  //////////////////////////////////////////////////////////
  convert(to:string,from:string,amount:number,date:string){
    const headers=this.headers
    return this.httpclient.get(`${environment.apiURL}convert?to=${to}&from=${from}&amount=${amount}&date=${date}`,{headers})
  }
}
