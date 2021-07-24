import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.page.html',
  styleUrls: ['./recipe.page.scss'],
})
export class RecipePage implements OnInit {

  constructor() { }
  recipe:any[]=[
    {
      "name": "Avocado and Poached Egg Toast",
      "Ingredients" : [
        "1 c. all-purpose flour\r",
        "1 tsp. garlic powder\r",
        "1 tsp. onion powder\r",
        "1 tsp. chili powder\r",
        "1/2 tsp. ground cumin\r",
        "4 (6-oz.) tilapia filets\r",
        "Kosher salt\r",
        "Freshly ground black pepper\r",
        "2 tbsp. canola or vegetable oil, divided\r",
        "2 tbsp. cilantro leaves, for garnish\r",
        "Lime wedges, for serving\r",
      ],
      "image": 'https://pinchofyum.com/wp-content/uploads/poached-egg-toast-square.jpg'
    }
  ]
  ngOnInit() {
  }

}
