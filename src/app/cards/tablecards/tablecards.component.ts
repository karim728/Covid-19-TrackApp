import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-tablecards',
  templateUrl: './tablecards.component.html',
  styleUrls: ['./tablecards.component.css']
})
export class TablecardsComponent implements OnInit {
@Input("countryData")countryData;
  constructor() { }

  ngOnInit(): void {
    console.log(this.countryData)
  }

}
