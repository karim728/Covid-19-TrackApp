import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from  '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import { Ng2GoogleChartsModule, GoogleChartsSettings } from 'ng2-google-charts';
import { ChartsModule } from 'ng2-charts';


import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountriescardsComponent } from './cards/countriescards/countriescards.component';
import { StatusboardComponent } from './cards/statusboard/statusboard.component';
import { TablecardsComponent } from './cards/tablecards/tablecards.component';
import { GraphcardComponent } from './cards/graphcard/graphcard.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    CountriesComponent,
    CountriescardsComponent,
    StatusboardComponent,
    TablecardsComponent,
    GraphcardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    Ng2GoogleChartsModule,
    ChartsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      { path: 'countries', component: CountriesComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
