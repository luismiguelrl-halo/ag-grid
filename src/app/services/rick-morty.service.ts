import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  private url = "https://rickandmortyapi.com/api/"

  constructor(private httpClient:HttpClient) { }

  public getCharacters():Observable<Array<any>> {
    return this.httpClient.get(`${this.url}character`).pipe(map((v:any) => v.results))
  }
}
