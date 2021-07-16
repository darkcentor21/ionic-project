import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  constructor() { }
  food : any[] = [
    {
      "name":"Breakfast",
      "image":"https://images.unsplash.com/photo-1493770348161-369560ae357d?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWtmYXN0fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
      "path":"/breakfast"
    },
    {
      "name":"Lunch",
      "image":"https://images.unsplash.com/photo-1547592180-85f173990554?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGVhbHRoeSUyMGZvb2R8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80",
      "path":"/lunch"
    },
    {
      "name":"Dinner",
      "image":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimagesvc.timeincapp.com%2Fv3%2Fmm%2Fimage%3Furl%3Dhttps%3A%2F%2Fimg1.cookinglight.timeinc.net%2Fsites%2Fdefault%2Ffiles%2Fstyles%2F4_3_horizontal_-_1200x900%2Fpublic%2F1521483824%2F1803wSpicyDrummetesAirFryer_0.jpg%3Fitok%3DxRl8IXHW%26w%3D800%26c%3Dsc%26poi%3Dface%26q%3D85",
      "path":"/dinner"
    }
  ]
  ngOnInit() {
  }

}
