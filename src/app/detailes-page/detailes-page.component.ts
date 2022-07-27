import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-detailes-page',
  templateUrl: './detailes-page.component.html',
  styleUrls: ['./detailes-page.component.css']
})
export class DetailesPageComponent implements OnInit {

  constructor(private mys:ServiceService) { }

  ngOnInit(): void {
    
  }

}
