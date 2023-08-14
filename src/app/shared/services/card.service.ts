import {Injectable} from '@angular/core';
import {CardType} from "../../../types/card-type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CardService {

  constructor(private http: HttpClient) {
  }

  getCards(): Observable<CardType[]> {
    return this.http.get<CardType[]>(environment.apiURL + 'tea');
  }

  getCard(id: number): Observable<CardType> {
    return this.http.get<CardType>(environment.apiURL + `tea?id=${id}`);
  }
}


