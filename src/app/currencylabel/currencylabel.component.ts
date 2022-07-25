import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-currencylabel',
  templateUrl: './currencylabel.component.html',
  styleUrls: ['./currencylabel.component.css']
})
export class CurrencylabelComponent implements OnInit {
symbols!:any
convertedresponse!:any
info!:any
result!:number
query!:any
symbol1='USD';symbol2='EGP'
amount!:number

  constructor(private myservice:ServiceService) { }

  ngOnInit(): void {
  this.allsymbols()
 
  }
   allsymbols() {
     this.myservice.symbols().subscribe((response)=>{this.symbols=response; console.log(this.symbols.symbols)})
    
  }
  exchange(){
let temp=this.symbol1
this.symbol1=this.symbol2
this.symbol2=temp


  
  }
   convert(){
    let today = new Date();
    let dd = String(today.getDate()).padStart(2, '0');
    let mm = String(today.getMonth() + 1).padStart(2, '0'); 
    let yyyy = today.getFullYear();
    
   let date =yyyy + '-'+  mm + '-' + dd ;
   console.log(this.amount,this.symbol2,this.symbol1)
   this.myservice.convert(this.symbol2,this.symbol1,this.amount,date).subscribe((response)=>{
     
    console.log(response);
    this.convertedresponse=response
    this.info=this.convertedresponse.info
    this.result=this.convertedresponse.result
    this.query=this.convertedresponse.query
  })

   } 


}
