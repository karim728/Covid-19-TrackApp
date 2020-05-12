import { Component, OnInit,Input } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';

@Component({
  selector: 'app-statusboard',
  templateUrl: './statusboard.component.html',
  styleUrls: ['./statusboard.component.css']
})
export class StatusboardComponent implements OnInit {
@Input()globalData;
// @Input()countryData;
@Input()selectedCountry
  constructor( private dataService : DataServiceService) { }

  ngOnInit(): void {

    // this.dataService.getGlobalData().subscribe(result=>{
    //   this.globalData=result;
    // })
//this.globalData=this.countryData
 this.dataService.getCountryDetails(this.selectedCountry).subscribe(result=>{
  this.globalData=result;
  console.log(result)
 })

  }
 

}
