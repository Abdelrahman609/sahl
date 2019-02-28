import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  link="https://abdelrahman-lotfy.000webhostapp.com/public";

  constructor(private http: HttpClient) { }

  getCats() {
    // this.http.get(this.link+"/key/1234/cats").subscribe(
    //   ((data)=>{
    //     return data;
    //   }),
    //   ((error)=>{
    //     console.log(error);
    //   })
    // )

    return this.http.get(this.link+"/key/1234/cats");
  }
}
