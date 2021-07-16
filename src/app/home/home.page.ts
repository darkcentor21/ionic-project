import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}
    eats: any[]=[
      {
        "id":1,
        "name":"Breakfast"
      },
      {
        "id":2,
        "name":"Lunch"
      },
      {
        "id":3,
        "name":"Dinner"
      }
    ]


  
}


