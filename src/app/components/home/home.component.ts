import { Component, OnInit, ɵConsole } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';
import { CountriesComponent } from '../countries/countries.component';
import {GlobalDataModel}     from '../../model/GlobalDataModel'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
public globalData;



  constructor(private dataService : DataServiceService) { }

  ngOnInit(): void {
    this.getGlobalData()
  }



  public   getGlobalData(){
      this.dataService.getGlobalData().subscribe(
      result =>{
        this.globalData=result
        console.log(this.globalData)
      })
  }
}
