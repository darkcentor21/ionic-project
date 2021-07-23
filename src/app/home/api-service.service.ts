import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  data: Observable<any>;
  constructor(private httpclient: HttpClient) { this.data = this.httpclient.get("https://wger.de/api/v2/exerciseinfo/?format=json&limit=373&offset=40") }
  getData():Observable <any>{
    console.log(this.data);
    return this.data;
  }
  
}
