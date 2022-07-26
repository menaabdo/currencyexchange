import { Injectable } from '@angular/core';


import { Observable } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
 
export class ServiceService {
  amount!:number
  symbol1!:string
  symbol2!:string
  result!:number
  rate!:number
  from!:string
  to!:string
  fullname!:string

  headers=new HttpHeaders({"apikey":"2xyOlJVWxcwG31sSrPgLHrzWsy6O097h"})
  constructor(private httpclient: HttpClient) { }
  symbols(){

    const headers =this.headers
    return this.httpclient.get<{symbols:any}>(`${environment.apiURL}symbols`,{headers})

  }
  //////////////////////////////////////////////////////////
  convert(to:string,from:string,amount:number,date:string){
    const headers=this.headers
    return this.httpclient.get(`${environment.apiURL}convert?to=${to}&from=${from}&amount=${amount}&date=${date}`,{headers})
  }
  //////////////////////////////////////
  ratesofpastyear(base:string,symbols:string,end_date:string,start_date:string){
    const headers=this.headers
  
    return this.httpclient.get(`${environment.apiURL}timeseries?base=${base}&symbols=${symbols}&end_date=${end_date}&start_date=${start_date}`,{headers})
  }
  latest(symbols:string,base='USD'){
    const headers=this.headers
  
    return this.httpclient.get(`${environment.apiURL}latest?symbols=${symbols}&base=USD`,{headers})
 
  }
}
