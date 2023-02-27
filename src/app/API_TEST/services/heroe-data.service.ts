import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeroeDataService {

  constructor(private http: HttpClient) { }

  getDataSuperHeroes(){
    return this.http.get('https://superhero-search.p.rapidapi.com/api/heroes',{      
      headers: {
        'X-RapidAPI-Key': '678c808f79msh95897ff8eb5f4c1p12da51jsna13b534c84c9',
        'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
      }
    })
  }

}
