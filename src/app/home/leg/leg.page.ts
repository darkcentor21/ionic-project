import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-leg',
  templateUrl: './leg.page.html',
  styleUrls: ['./leg.page.scss'],
})
export class LegPage implements OnInit {

  constructor(private http: HttpClient) { }
  leg:any
  ngOnInit() {
    this.http.get('https://wger.de/api/v2/exerciseinfo/?format=json&limit=373&offset=40')
    .subscribe(data=>{
      console.log(data)
      this.leg =data['results'];
    })
  }

}
