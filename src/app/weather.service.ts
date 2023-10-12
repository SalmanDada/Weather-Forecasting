import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  APIKey: any = '7270e604c535aa093e3f915d21452e1f';

  constructor(private http: HttpClient) { }

  getWeatherDetails(city: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=' + this.APIKey)
      .pipe(
        map((response: any) => response),
        catchError((error) => {
          this.handleError(error);
          return throwError(error.error?.message);
        })
      );
  }


  getForecastDetails(city: string) {
    return this.http.get('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=' + this.APIKey)
      .pipe(
        map((response: any) => response),
        catchError((error) => {
          this.handleError(error);
          return throwError(error.error?.message);
        })
      );
  }


  private handleError(error: any) {
    console.error('An error occurred:', error);
  }
}
