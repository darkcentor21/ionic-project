import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";


@Component({
  selector: 'app-backinfo',
  templateUrl: './backinfo.component.html',
  styleUrls: ['./backinfo.component.scss'],
})
export class BackinfoComponent implements OnInit {

  constructor(private route: ActivatedRoute,private http: HttpClient,private ApiServiceService: ApiServiceService) { }
  back:any;
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productionIdfromRoute = Number(routeParams.get('id'));
    this.ApiServiceService.getData()
    .subscribe(
      data=>{
        this.back = data['results'][productionIdfromRoute]
        
        console.log(this.back)
        

        
      }
    );
  }

}
