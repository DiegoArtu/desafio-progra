import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NasaserviceService {

  date = new Date();
  milisegundos = 48*60*60*1000;
  date2 = new Date(this.date.getTime() - this.milisegundos);
  dateformat = this.date2.toLocaleDateString('en-CA');
  constructor( private http:HttpClient) { }

  nasaImg(){
    console.log(this.dateformat)
    return this.http.get( `https://api.nasa.gov/planetary/apod?api_key=hcleH3q8qQK0pxbggvmTFwxcugQnWKuv4K5x4tRb&start_date=${this.dateformat}`);
  }
}
