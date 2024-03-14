declare var google:any
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import {  Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserServiceService } from '../../service/user-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  Loginform!:FormGroup

  constructor(private router:Router,private toast:ToastrService,private userservice:UserServiceService){}
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
      email:new FormControl('',[Validators.required])
    })
    
  }


  submit(){
    const userdata= this.Loginform.getRawValue()
    console.log(userdata);
    this.userservice.loginUser(userdata).subscribe((res:any)=>{
      localStorage.setItem("usersecret",res.token)
      this.toast.success(res.message)
      this.router.navigate(['home'])

    },(err)=>{
      this.toast.error(err.error.message)
    })
    
    
  }
  get name(){
    return this.Loginform.get('name')
  }
  get email(){
    return this.Loginform.get('email')
  }

  private decodeToken(token:string){
    return JSON.parse(atob(token.split(".")[1]))
  }

  handleLogin(resp:any){
    
    if(resp){
      const payload=this.decodeToken(resp.credential)
      console.log(payload);

      this.userservice.loginUser(payload).subscribe((res:any)=>{
        localStorage.setItem("usersecret",res.token)
        this.toast.success(res.message)

      },(err)=>{
        this.toast.error(err.error.message)
      })
      
      this.router.navigate(['home'])
      
    }
    
  }
}
