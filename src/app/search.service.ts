import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  API_URL= 'https://api.unsplash.com/search/photos?client_id='
  API_Key = 'NzPtfvcKys29x2X0lE6qBR_6Wjlr93Alw4Sd1jzq6sc'
  getImage(keyWord: String){
    const url = `${this.API_URL}${this.API_Key}&query=${keyWord}`;
    return this.http.get(url);

  }
}
