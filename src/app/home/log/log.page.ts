import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.page.html',
  styleUrls: ['./log.page.scss'],
})
export class LogPage implements OnInit {
  public height:number;
  public weight:number;
  public bmi:number;
  public heightsqured:number;
  constructor() { }
  calculate(){
    this.heightsqured=this.height*this.height
    this.bmi=this.weight/this.heightsqured;
    console.log(this.bmi);
    Math.floor(this.bmi);

    return this.bmi

    
  }
  ngOnInit() {
    
  }




}
