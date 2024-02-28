import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './user/components/home/home.component';
import { AboutComponent } from './user/components/about/about.component';
import { ServiceComponent } from './user/components/service/service.component';
import { CareerComponent } from './user/components/career/career.component';
import { ContactComponent } from './user/components/contact/contact.component';
import { LoginComponent } from './user/components/login/login.component';


const routes:Routes=[
  {path:'home',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'service',component:ServiceComponent},
  {path:'career',component:CareerComponent},
  {path:'contact',component:ContactComponent},
  {path:'login',component:LoginComponent},
  {path:'**',redirectTo:'home'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
