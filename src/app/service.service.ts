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

  headers=new HttpHeaders({"apikey":"k4uZoQJzYMhJBF6KI5oJHcR8kzuDP4dt"})
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
  //////////////////////////////////////
  ratesofpastyear(base:string,symbols:string,end_date:string,start_date:string){
    const headers=this.headers
    console.log(this.symbol1)
    return this.httpclient.get(`${environment.apiURL}timeseries?base=${base}&symbols=${symbols}&end_date=${end_date}&start_date=${start_date}`,{headers})
  }
}
