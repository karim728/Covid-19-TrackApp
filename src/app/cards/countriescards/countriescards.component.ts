import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { DataServiceService } from 'src/app/services/data-service.service';


@Component({
  selector: 'app-countriescards',
  templateUrl: './countriescards.component.html',
  styleUrls: ['./countriescards.component.css']
})
export class CountriescardsComponent implements OnInit {
public countriesArray;
@Output()selectedC= new EventEmitter();

  constructor(private DataService:DataServiceService) { }

  ngOnInit(): void {
    this.DataService.getAllCountries().subscribe((result)=>{
      this.countriesArray=result;
    })
    
  }

  selctedCountry(event){
    //this.selectedC=event.target.value;
    //console.log( this.selectedC)
    this.selectedC.emit(event.target.value)
  }


}
