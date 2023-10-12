import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  inputCity: string = '';
  weatherData: any;
  APIKey: any = '7270e604c535aa093e3f915d21452e1f';
  error: any = "";
  

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }


  search() {
    this.error = null;
    this.weatherData = null;
    this.weatherService.getWeatherDetails(this.inputCity).subscribe((data : any) => {
      this.weatherData = data;
      console.log(this.weatherData);
    },
    (error) => {
      this.error = error;
    })
  }

}
