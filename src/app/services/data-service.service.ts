import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import {GlobalDataModel}     from '../model/GlobalDataModel'

import { getInterpolationArgsLength } from '@angular/compiler/src/render3/view/util';
import { JsonPipe } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

baseURL="https://corona.lmao.ninja/v2/";
secondURL="http://api.coronastatistics.live/timeline/"
thirdURL ="http://api.coronastatistics.live/countries/"

  constructor( private http: HttpClient) { 

  }

  getAllCountries(){
     return this.http.get(this.baseURL + "countries");
}

getGlobalData(){
  return this.http.get(this.baseURL +"all");
}

getCountryTimeline(country :string){
  return this.http.get(this.secondURL + country)
}

getCountryDetails(country :string){
  return this.http.get(this.thirdURL + country)
}

}


