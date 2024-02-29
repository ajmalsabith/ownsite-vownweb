declare var google:any
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  Loginform!:FormGroup

  constructor(private router:Router){}
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

  get name(){
    return this.Loginform.get('name')
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
