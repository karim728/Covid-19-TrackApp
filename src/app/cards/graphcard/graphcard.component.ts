import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';



@Component({
  selector: 'app-graphcard',
  templateUrl: './graphcard.component.html',
  styleUrls: ['./graphcard.component.css']
})
export class GraphcardComponent implements OnInit {
@Input()globalData;
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
  constructor() { }

  ngOnInit(): void {
this.pcharttwo()
 this.barChartLabels = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
 this.barChartType = 'bar';
 this.barChartLegend = true;
 this.barChartData = [
  {data: [parseInt(this.globalData.cases), 59, 80, 81, 56, 55, 40], label: 'Series A'},
  // {data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B'}
];


}
pChart(cc){
  let data =[];
  data.push(['Task','Hours']);
  data.push(['todo',200])
  this.pieChart = {
  chartType: 'PieChart',
  dataTable:data,
  //firstRowIsData: true,
  options: {'title': 'Tasks',
            'width': 700,
            'height': 600},
};
}

pcharttwo(){
  setTimeout(() => {
    let data =[];
    data.push(['Task','Hours']);
    data.push(['todo',100])
    this.pieChart = {
    chartType: 'PieChart',
    dataTable:data,
    //firstRowIsData: true,
    options: {'title': 'Tasks',
              'width': 700,
              'height': 600},
  };
  this.isavailable=true
  }, 1000);
}


}
