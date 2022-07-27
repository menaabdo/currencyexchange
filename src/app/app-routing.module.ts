import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailesPageComponent } from './detailes-page/detailes-page.component';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [
 {path:'',component:HomePageComponent},
  {
  path: "home",
  component: HomePageComponent},
  {
    path:'detailes',
    component:DetailesPageComponent
  },
  {
    path:'oops',
    component:ErrorpageComponent

  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
