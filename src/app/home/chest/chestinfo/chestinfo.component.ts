import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-chestinfo',
  templateUrl: './chestinfo.component.html',
  styleUrls: ['./chestinfo.component.scss'],
})
export class ChestinfoComponent implements OnInit {

  constructor(private route: ActivatedRoute,private http: HttpClient,private ApiServiceService: ApiServiceService) { }
  chest:any
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productionIdfromRoute = Number(routeParams.get('id'));
    this.ApiServiceService.getData()
    .subscribe(
      data=>{
        this.chest = data['results'][productionIdfromRoute]
        
        console.log(this.chest)
        

        
      }
    );
  }

}
