import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-abs',
  templateUrl: './abs.page.html',
  styleUrls: ['./abs.page.scss'],
})
export class AbsPage implements OnInit {

  constructor(private http: HttpClient) { }
  abs: any
  ngOnInit() {
    this.http.get('https://wger.de/api/v2/exerciseinfo/?format=json&limit=373&offset=40')
    .subscribe(data=>{
      console.log(data)
      this.abs =data['results'];
    })
  }

}
