import { Component, OnInit,EventEmitter } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { GoogleChartInterface } from 'ng2-google-charts';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.css']
})
export class CountriesComponent implements OnInit {
public selectedCountry="Afghanistan"
public countryData;
public globalData;

  constructor(private dataService : DataServiceService) { }

  ngOnInit(): void {

// Default country
this.dataService.getCountryDetails("Afghanistan").subscribe(result=>{
  this.globalData=result;
  console.log(result)
 })

    console.log(this.selectedCountry)
    this.dataService.getCountryTimeline(this.selectedCountry).subscribe(result=>{
      this.countryData=result;
      console.log(result);
    })
    


  } //end of ngOnit


  getSelectedCountry(data){
    this.selectedCountry=data;
    this.dataService.getCountryTimeline(this.selectedCountry).subscribe(result=>{
      this.countryData=result;
      this.getCountryDetails(this.selectedCountry)
      console.log(result);
    })
  }


getCountryDetails(country:string){
  this.dataService.getCountryDetails(country).subscribe(result=>{
    this.globalData=result;
    console.log(result)
   })
}

}

