import { Injectable,OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService  {

  constructor(private http:HttpClient) { }

  getproducts(){
   return this.http.get<any>("https://fakestoreapi.com/products/")
   .pipe(map((res:any)=>{
    return res;
   }))

   
  }
    
}

