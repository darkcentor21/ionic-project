import { Component, OnInit } from '@angular/core';
import { ApiServiceService } from '../../api-service.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-absinfo',
  templateUrl: './absinfo.component.html',
  styleUrls: ['./absinfo.component.scss'],
})
export class AbsinfoComponent implements OnInit {

  constructor(private route: ActivatedRoute,private http: HttpClient,private ApiServiceService: ApiServiceService) { }
  absinfo:any
  ngOnInit() {
    const routeParams = this.route.snapshot.paramMap;
    const productionIdfromRoute = Number(routeParams.get('id'));
    this.ApiServiceService.getData()
    .subscribe(
      data=>{
        this.absinfo = data['results'][productionIdfromRoute]
        
        console.log(this.absinfo)
        

        
      }
    );
  }
  
}
