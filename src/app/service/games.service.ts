import { Injectable } from '@angular/core';
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
import {Token} from "../components/token.model";

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor(private api: ApiService) { }

  createNewGame(type: string): Observable<any> {
    return this.api.get(`new/${type}`, );
  }

  drawToken(gameId: string): Observable<Token> {
    return this.api.get('draw/' + gameId)
  }
}
