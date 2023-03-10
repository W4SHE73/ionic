import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsArticlesService {

  constructor(private httpClient:HttpClient) { 

  }

  getTopHeadlines():Observable<any> {
    return this.httpClient.get(
      `${environment.URL_base1}top-headlines?country=us&apiKey=${environment.API_key1}`
    )
  }

}
