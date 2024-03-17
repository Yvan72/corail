
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clients } from '../model/client/client';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class PageDeGardeService {

  private urlApi: string;
  public collection$: Observable<Clients[]>;

  constructor(private httpClient: HttpClient) {
   this.urlApi ='http://localhost:3000';
    this.collection$ = this.httpClient.get<Clients[]>(`${this.urlApi}/clients`);
console.log(this.collection$);

  }
}
