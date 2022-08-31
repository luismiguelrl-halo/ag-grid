import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BreakingBadService {


  private url = "https://www.breakingbadapi.com/api/"

  constructor(private httpClient:HttpClient) { }

  getAllCharacters():Observable<any>{
    return this.httpClient.get(`${this.url}characters`);
  }
}
