import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, pipe } from 'rxjs';
import { Episode } from './models/episode';

@Injectable({
  providedIn: 'root'
})
export class RickMortyService {

  private url = "https://rickandmortyapi.com/api/"

  constructor(private httpClient: HttpClient) { }

  public getCharacters():Observable<any> {
    return this.httpClient.get(`${this.url}character`);
  }
  public getCharactersByPage(nextData:string):Observable<any> {
    return this.httpClient.get(`${nextData}`);
  }

  public getEpisodes(): Observable<Array<Episode>> {
    return this.httpClient.get(`${this.url}episode`).pipe(map((v: any) => v.results));

  }


}
