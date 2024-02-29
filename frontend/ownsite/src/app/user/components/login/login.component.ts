declare var google:any
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  Loginform!:FormGroup

  constructor(private router:Router,private toast:ToastrService){}
  ngOnInit(): void {
    google.accounts.id.initialize({
      client_id:'197165555945-pb7lus3vo9d337t8gbdovkd5qj9kjsos.apps.googleusercontent.com',
      callback: (resp:any)=>this.handleLogin(resp)
    })

    google.accounts.id.renderButton(document.getElementById("google-btn"),{
      theme:'outline',
      size:'large',
      shape:'rectangle',
    })

    this.Loginform=new FormGroup({
      name:new FormControl('',[Validators.required]),
      emailORphone:new FormControl('',[Validators.required])
    })
    
  }


  submit(){
    const userdata= this.Loginform.getRawValue()
    console.log(userdata);
    this.toast.success(userdata.name)
    
    
  }
  get name(){
    return this.Loginform.get('name')
  }
  get emailORphone(){
    return this.Loginform.get('emailORphone')
  }

  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]))
  }

  handleLogin(resp:any){
    
    if(resp){
      const payload=this.decodeToken(resp.credential)
      console.log(payload);
      
      this.router.navigate(['home'])
      
    }
    
  }
}
