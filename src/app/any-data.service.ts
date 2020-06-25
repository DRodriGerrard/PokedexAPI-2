import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AnyDataService {

  constructor() {}

  theURL = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=807';

  getDataURL(): Promise<any[]>{
    return axios.get(this.theURL)
      .then(response => response.data.results)
  }
}
