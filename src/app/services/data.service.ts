import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'http://localhost:3000/list';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  } 
  constructor(private http: HttpClient) { }

  getFoodItems() {
    return this.http.get(this.url);
  }

  addItem(item: any) {
    return this.http.post(this.url, item);
   }

   deleteItem(id: any) {
    let endPoint = this.url+'/'+id;
    return this.http.delete(endPoint,this.httpOptions);
     }

     updateItem(p: any) {
      let endPoint = this.url+'/'+p.id;
      return this.http.put(endPoint,JSON.stringify(p), this.httpOptions);
       }
}
