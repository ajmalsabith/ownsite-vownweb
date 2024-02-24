import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/components/home/home.component';
import { AboutComponent } from './user/components/about/about.component';
import { ServiceComponent } from './user/components/service/service.component';
import { CareerComponent } from './user/components/career/career.component';
import { ContactComponent } from './user/components/contact/contact.component';


const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'service',component:ServiceComponent},
  {path:'career',component:CareerComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',redirectTo:'home'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
