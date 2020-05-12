import { Component, OnInit,Output,Input,EventEmitter } from '@angular/core';
import { GoogleChartInterface } from 'ng2-google-charts';



@Component({
  selector: 'app-graphcard',
  templateUrl: './graphcard.component.html',
  styleUrls: ['./graphcard.component.css']
})
export class GraphcardComponent implements OnInit {
@Input()globalData;
public  cc=0;
isavailable:boolean=false;
 pieChart: GoogleChartInterface = {
  chartType: 'PieChart',
}
  constructor() { }

  ngOnInit(): void {

    this.cc=this.globalData.active
    this.pChart()
}
pChart(){
  let data =[];
  data.push(['Task','Hours']);
  
  data.push(['active', 200])
  
  this.pieChart = {
  chartType: 'PieChart',
  dataTable:data,
  //firstRowIsData: true,
  options: {'title': 'Tasks',
            'width': 700,
            'height': 600},
};
}


}
