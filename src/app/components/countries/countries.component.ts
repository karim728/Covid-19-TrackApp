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
isavailable:boolean=false;

pieChart: GoogleChartInterface = {
  chartType: 'PieChart',
}


public barChartOptions = {
  scaleShowVerticalLines: false,
  responsive: true
};
public barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public barChartType = 'bar';
public barChartLegend = true;
public barChartData = [
  // {data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A'},
  // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
];

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
      console.log("activated")
     


      console.log(result);
    })
  }


getCountryDetails(country:string){
  this.dataService.getCountryDetails(country).subscribe(result=>{
    this.globalData=result;
    console.log(result)

    this.pcharttwo()
    this.barChartLabels = ['cases', 'Active', 'critical', 'Deaths', 'Recovered'];
    this.barChartType = 'bar';
    this.barChartLegend = true;
    this.barChartData = [
     {data: [parseInt(this.globalData.cases), parseInt(this.globalData.active), parseInt(this.globalData.critical), parseInt(this.globalData.deaths), parseInt(this.globalData.recovered), 55, 40], label: this.globalData.country},
     // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
   ];

   console.log(this.globalData.cases)
   })
}

pcharttwo(){
  setTimeout(() => {
    let data =[];
    data.push(['Task','Hours']);
    // data.push(['todo',parseInt(this.globalData.active)])
    data.push(['cases',parseInt(this.globalData.cases)])
    this.pieChart = {
    chartType: 'PieChart',
    dataTable:data,
    //firstRowIsData: true,
    options: {'title': 'Tasks',
              'width': 700,
              'height': 600},
  };
  
  this.isavailable=true
  }, 2000);
}


}

