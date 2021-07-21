import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-chest',
  templateUrl: './chest.page.html',
  styleUrls: ['./chest.page.scss'],
})
export class ChestPage implements OnInit {

  constructor(private http: HttpClient) { }
  chest:any
  ngOnInit() {
    this.http.get('https://wger.de/api/v2/exerciseinfo/?format=json&limit=373&offset=40')
    .subscribe(data=>{
      console.log(data)
      this.chest =data['results'];
    })
  }

}
