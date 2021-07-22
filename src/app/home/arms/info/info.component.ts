import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { ApiServiceService } from '../../api-service.service';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  
  constructor(private route: ActivatedRoute,private http: HttpClient,private ApiServiceService: ApiServiceService) { }
  info:any
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productionIdfromRoute = Number(routeParams.get('id'));
    console.log(productionIdfromRoute);
    this.ApiServiceService.getData()
    .subscribe(
      data=>{
        this.info = data['results'];
      }
    );


  }
    
}

