import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:HttpClient) { }
  url:string='http://localhost:4000'
  loginUser(userdata:any){
    console.log(userdata+'is daat');
    
    return this.http.post(this.url+'/loginUser',userdata)
  }
}
