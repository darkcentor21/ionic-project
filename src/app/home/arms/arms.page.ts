import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Component({
  selector: 'app-arms',
  templateUrl: './arms.page.html',
  styleUrls: ['./arms.page.scss'],
})
export class ArmsPage implements OnInit {

  constructor(private http: HttpClient) { }

  recipe:any
  ngOnInit() {
    this.http.get('https://api.edamam.com/api/recipes/v2')
    .subscribe(data=>{
      console.log(data)
      this.recipe =data;
    })
  }

}
