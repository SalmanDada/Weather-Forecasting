import { Component } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  inputCity: string = '';
  forcastData: any;
  APIKey: any = '7270e604c535aa093e3f915d21452e1f';
  error: any = "";
  

  constructor(private weatherService: WeatherService) { }

  ngOnInit() {
  }


  search() {
    this.error = null;
    this.forcastData = null;
    this.weatherService.getForecastDetails(this.inputCity).subscribe((data : any) => {
      this.forcastData = data;
      console.log(this.forcastData);
    },
    (error) => {
      this.error = error;
    })
  }

}
