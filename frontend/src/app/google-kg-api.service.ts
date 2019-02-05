import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoogleKgApiService {

  GOOGLE_API_URL: string = "https://kgsearch.googleapis.com/v1/entities:search";
  GOOGLE_API_KEY: string = environment.google_kg_api_key;

  constructor(public http: HttpClient) { }

  // read method
  public get(query) {
    var endpoint = this.GOOGLE_API_URL;
    return this.http.get(endpoint, {
      params: { 'key': this.GOOGLE_API_KEY, 'query': query, 'types': 'Person', },
    });
  }
}
