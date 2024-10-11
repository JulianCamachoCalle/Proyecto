import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlapi="http://192.168.18.5:3306/crud_android2/mostrar_.php"
  constructor(private http: HttpClient) { }

  public getData():Observable<any>{
    return this.http.get<any>(this.urlapi);
  }
}
