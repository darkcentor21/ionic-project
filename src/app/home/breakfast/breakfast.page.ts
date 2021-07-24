import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.page.html',
  styleUrls: ['./breakfast.page.scss'],
})
export class BreakfastPage implements OnInit {

  constructor() { }
  menu:any[]=[
    {
      "name": "Avocado and Poached Egg Toast",
      "image": 'https://pinchofyum.com/wp-content/uploads/poached-egg-toast-square.jpg',
      'path':'recipe'
    },
    {
      "name": "Peanut Banana Cinnamon Smoothies",
      "image":'https://www.thespruceeats.com/thmb/3no8oXbbOtwMfKtPFDlUkcaRHH4=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/PeanutBananaCinnamonSmoothie-TaraDonne-Photolibrary-GettyImages-5b140243fa6bcc00362e62cd.jpg'
    },
    {
      "name": "Overnight Chia Seed Oatmeal",
      "image": 'https://www.thespruceeats.com/thmb/09W5gJN4FcbDW8PgD57SlZEzjp8=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/OvernightChiaSeedOatmeal-laurelrandolph-5b1402843037130036aa00dc.jpg'
    },
    {
      "name": "Savory Quinoa Egg Muffins With Spinach",
      "image": 'https://www.thespruceeats.com/thmb/gSaMJXDXCo4zlXSYhXOKh-qqaA0=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/SavoryQuinoaEggMuffinsWithSpinach-billboch-gettyimages-5b1402d1a474be0038a3e3dc.jpg'
    },
    {
      "name": "Tropical Acai Breakfast Bowl",
      "image": 'https://www.thespruceeats.com/thmb/F3VrhZnGzY9eVjs0eg71uTNJsvA=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/TropicalAcaiBreakfastBowl-leahmaroney-5b1402f9ff1b7800364310a8.jpg'
    },


  ]
  ngOnInit() {
  }

}
