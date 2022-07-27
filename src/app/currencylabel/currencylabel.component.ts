import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
//import { Chart,LinearScale, BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip} from 'chart.js';
import Chart from 'chart.js/auto';
import { Latest } from '../models/latest.model';
import { Rates } from '../models/rates.model';
import { ServiceService } from '../service.service';
import { catchError, throwError } from 'rxjs';


@Component({
  selector: 'app-currencylabel',
  templateUrl: './currencylabel.component.html',
  styleUrls: ['./currencylabel.component.css']
})
export class CurrencylabelComponent implements OnInit {
  

path!:string
symbols!:symbol
convertedresponse!:any
info!:any
result!:number
query!:any
from!:string
to!:string
rate!:number
symbol1='USD';symbol2='EGP'
amount!:number
fullname='EUR - European Union Euro'
 today = new Date();
 allrates!:any
 specificrates!:any
data!:number[]
popularres!:any
s!:KeyType
mydata!:Rates

popular='EUR%2CCHF%2CGBP%2CJPY%2CJPY%2CGBP%2CUSD%2CCAD%2CEUR%2CJPY%2CAUD%2CAWG%2CARS'
  constructor(private myservice:ServiceService,private active :ActivatedRoute,private route:Router) { 
    //Chart.register(BarElement, BarController, CategoryScale, Decimation, Filler, Legend, Title, Tooltip);
 
  }

  ngOnInit(): void {
this.allsymbols()

this.path=(this.active.snapshot.url[0].path)

if(this.path=='detailes'){
  this.symbol1=this.myservice.symbol1
  this.symbol2=this.myservice.symbol2
  this.amount=this.myservice.amount
  this.fullname=this.myservice.fullname
  this.result=this.myservice.result
  this.rate=this.myservice.rate
  this.from=this.myservice.from
  this.to=this.myservice.to
  
  this.rates()
}



 
  }
   allsymbols() {
     this.myservice.symbols().pipe(
      catchError(() => {
        return throwError(() => new Error('ups sommething happend'));
      })
    )
     .subscribe((response)=>{
       this.symbols=response.symbols;
       console.log(this.symbols)
       },(err)=>{this.route.navigateByUrl('/oops')})
    
  }
  exchange(){
let temp=this.symbol1
this.symbol1=this.symbol2
this.symbol2=temp


  
  }
   convert(){
    
    let dd = String(this.today.getDate()).padStart(2, '0');
    let mm = String(this.today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = this.today.getFullYear();
    
   let date =yyyy + '-'+  mm + '-' + dd ;
   
   this.myservice.convert(this.symbol2,this.symbol1,this.amount,date).subscribe((response)=>{
     
    
    this.convertedresponse=response
    this.rate=this.convertedresponse.info.rate
    this.result=this.convertedresponse.result
    this.to=this.convertedresponse.query.to
    this.from=this.convertedresponse.query.from
    this.myservice.amount=this.amount
    this.myservice.symbol1=this.symbol1
    this.myservice.symbol2=this.symbol2
    this.myservice.fullname=this.fullname
    this.myservice.rate=this.rate
    this.myservice.result=this.result
    this.myservice.from=this.from
    this.myservice.to=this.to
    
    
  })

   } 
   getfullname(){
    let s =this.s as keyof symbol
    s=this.symbol1 as keyof symbol
    this.fullname=this.symbol1 + this.symbols[s]! 
   
   }
   mychart(data:number[]){
    const canvas:any = document.getElementById('myChart')! as HTMLCanvasElement ;
  const ctx = canvas?.getContext('2d');

  const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Feb', 'Mar', 'Api', 'May', 'Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{
            label: ' Rates Chart in past year',
            data: data,
            backgroundColor:'black',
            borderColor:'gray',
            tension:0.4,
            fill:true
        }]
    },
    options: {
        scales: {
            y: {
                //beginAtZero: true
            }
        }
    }
});
   }
   rates(){
    let yyyy = this.today.getFullYear();
    let past=yyyy-1
    this.data=[]
    let counter=30
    this.myservice.ratesofpastyear(this.symbol1,this.symbol2,`${past}-12-31`,`${past}-01-31`).subscribe((response)=>{
      this.allrates=response
      this.specificrates=this.allrates.rates
      if(this.specificrates){
        for(let ele in this.specificrates){
              if(counter%30==0){
                this.data.push(this.specificrates[ele][this.symbol2])

              }counter++
        }console.log(this.data)
        this.mychart(this.data)
      }
      console.log(response)})
 
   }
 popular_curr(){
  this.myservice.latest(this.popular).subscribe((res)=>{
    this.popularres=res
    this.mydata=this.popularres.rates
    })
 }
 validate(){
   if(isNaN(this.amount)){
    

   }
  
 }

}
