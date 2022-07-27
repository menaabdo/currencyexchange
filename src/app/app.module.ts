import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { MainheaderComponent } from './mainheader/mainheader.component';
import { CurrencylabelComponent } from './currencylabel/currencylabel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailesPageComponent } from './detailes-page/detailes-page.component';




@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    MainheaderComponent,
    CurrencylabelComponent,
    DetailesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule  ,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
