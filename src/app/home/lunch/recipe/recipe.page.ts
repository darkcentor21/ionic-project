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
      "name": "Shaved Carrot and Radish Salad", 
 "ingredients": [
"For the Vinagrette\r",
	"3 tbsp. fresh orange juice\r",
	"3 tbsp. fresh lemon juice\r",
	"1 tsp. honey\r",
	"Kosher salt and pepper\r",
	"3 tbsp. olive oil\r",
"For Salad\r",
	"4 mixed colored carrots, shaved lengthwise (about 3 cups)\r",
	"4 radishes, shaved into rounds (about 1 cup)\r",
	"2 stalks celery, thinly sliced (about 2 cups)\r",
	"1 small beet, shaved into half moon rounds (about 1 cup)\r",
	"1 c. watercress\r",
	"2 small oranges, rind removed and sliced into half moons\r", 
	"1/2 c. fresh mint leaves, torn, if large\r",
],

"instructions" : [
	"1. In bowl, whisk together orange juice, lemon juice, honey, and 1/2 tsp each salt and pepper to dissolve honey, then whisk in oil.\r",
	"2. Arrange vegetables, oranges, and mint on large platter and drizzle with vinaigrette.\r", 	
],
    "image": 'https://assets.epicurious.com/photos/57041b11f6d67cd64a339356/master/pass/EP_03292016_persianpassover_206.jpg'

    }
  ]
  ngOnInit() {
  }

}
