import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GifApiService {

  GIF_API_URL : string = "api.giphy.com/v1/gifs/search";
  GIF_API_KEY : string = environment.giphy_api_key;

  constructor(public http: HttpClient) { }

  // read method
  public get(query) {
    var endpoint = this.GIF_API_URL;
    return this.http.get(endpoint, {
      params: {'api_key': this.GIF_API_KEY, 'q': query},
    });
  }
}
