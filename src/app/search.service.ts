import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';

export enum SearchType{
  all = '',
  diet = '',
  
}

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClientModule) { }

  searchData(){

  }
  getDetails(){
    
  }
}
