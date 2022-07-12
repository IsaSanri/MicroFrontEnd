import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getCharacter(id: string) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`);
  }
}
