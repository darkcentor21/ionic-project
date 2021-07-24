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
      "name": "Pan-Fried Tilapia",
      "ingredients" : [
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
      "instructions" : [
          "1. In a large bowl, whisk together flour, garlic powder, onion powder, chili powder, and cumin. Whisk to combine.\r",
          "2. Season tilapia filets generously with salt and pepper, then dip each in flour mixture, shaking off any excess flour. Place on a clean plate or baking sheet.\r",
          "3. In a large, nonstick skillet over medium heat, heat oil. Add 2 filets and cook 3 to 4 minutes per side, until crust is golden and fish flakes easily with a fork. Repeat with remaining filets.\r",
          "4.Serve immediately with cilantro and lime wedges.\r",
      ],
          "image": 'https://www.preciouscore.com/wp-content/uploads/2019/03/Pan-Seared-Tilapia.jpg',
          
        }, 
  ]
  ngOnInit() {

  }

}
