import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-back',
  templateUrl: './back.page.html',
  styleUrls: ['./back.page.scss'],
})
export class BackPage implements OnInit {

  constructor(private http: HttpClient) { }
  back: any
  ngOnInit() {
    this.http.get('https://wger.de/api/v2/exerciseinfo/?format=json&limit=373&offset=40')
    .subscribe(data=>{
      console.log(data)
      this.back =data['results'];
    })
  }

}
