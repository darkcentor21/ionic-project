import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-leg',
  templateUrl: './leg.component.html',
  styleUrls: ['./leg.component.scss'],
})
export class LeginfoComponent implements OnInit {

  constructor(private route: ActivatedRoute,private http: HttpClient,private ApiServiceService: ApiServiceService) { }
  leg: any
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productionIdfromRoute = Number(routeParams.get('id'));
    this.ApiServiceService.getData()
    .subscribe(
      data=>{
        this.leg = data['results'][productionIdfromRoute]
        
        console.log(this.leg)
        

        
      }
    );
  }

}
