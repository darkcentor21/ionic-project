import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-arms',
  templateUrl: './arms.page.html',
  styleUrls: ['./arms.page.scss'],
})
export class ArmsPage implements OnInit {

  constructor(private http: HttpClient) { }

  arms:any
  ngOnInit() {
    this.http.get('https://wger.de/api/v2/exerciseinfo/?format=json&limit=373&offset=40')
    .subscribe(data=>{
      console.log(data)
      this.arms =data['results'];
    })
  }

}
