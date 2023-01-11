import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

const API_URL = environment.URL_base2;
const API_KEY = environment.API_key2;

@Component({
  selector: 'app-eltiempo',
  templateUrl: './eltiempo.page.html',
  styleUrls: ['./eltiempo.page.scss'],
})
export class EltiempoPage implements OnInit {

  weatherTemp :any;
  todayDate = new Date();
  cityName :any;
  weatherIcon:any;
  weatherDetails:any;

  constructor(private httpClient:HttpClient ) {
   this.loadData()
  }

  loadData() {
    this.httpClient.get(`${API_URL}/weather?q=${"London"}&appid=${API_KEY}`)
    .subscribe(results => {
      console.log(results);
      this.weatherTemp = results['main']
      this.cityName = results['name']
      console.log(this.weatherTemp);
      this.weatherDetails = results['weather'] [0]
      console.log(this.weatherDetails);
      this.weatherIcon = `http://openweathermap.org/img/wn/${this.weatherDetails.icon}@2x.png` 
    })
  }


  


  ngOnInit() {
  }

}
