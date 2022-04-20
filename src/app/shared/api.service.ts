import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postPerson(data:any){
    return this.http.post<any>("http://localhost:3000/posts/",data)
    .pipe(map((res:any)=>{
      return res;
    }))
  }
 getPerson(){
    return this.http.get<any>("http://localhost:3000/posts")
    .pipe(map((res:any)=>{
      return res;
    }))
  }
    UpdatePerson(data :any, id:Number){
      return this.http.put<any>("http://localhost:3000/posts/"+id,data)
      .pipe(map((res:any)=>{
        return res;
      }))
    }

   DeletePerson(id: Number){
      return this.http.delete<any>("http://localhost:3000/posts/"+id)
      .pipe(map((res:any)=>{
        return res;
      }))
    }
  }

