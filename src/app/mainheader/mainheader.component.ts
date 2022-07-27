import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainheader',
  templateUrl: './mainheader.component.html',
  styleUrls: ['./mainheader.component.css']
})
export class MainheaderComponent implements OnInit {
data='data'
  constructor() { }

  ngOnInit(): void {
    
  }
  open = false;
//  fade = false;
 toggle = false;

 toggleClass() {
   this.open = !this.open;
  //  this.fade = !this.fade;
   this.toggle = !this.toggle;
 }

}
