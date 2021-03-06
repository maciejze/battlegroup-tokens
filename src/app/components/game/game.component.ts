import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GamesService} from "../../service/games.service";
import {Token} from "../token.model";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  gameId: string = '';
  tokens: Array<Token> = [];
  lastToken: Token = {};
  tokenModalVisibility = {visible: false};
  constructor(private route: ActivatedRoute, private gamesService: GamesService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.gameId = params.id;
      const tokens = localStorage.getItem(`tokens-${this.gameId}`);
      if(tokens) {
        this.tokens = JSON.parse(tokens);
      }
    })
  }

  drawToken(): void {
    this.gamesService.drawToken(this.gameId).subscribe(token => {
      this.tokens.push(token);
      this.tokens.sort((a,b) => {
        return (a.value || 0) - (b.value || 0 )
      })
      localStorage.setItem(`tokens-${this.gameId}`, JSON.stringify(this.tokens));
      this.lastToken = token;
      this.tokenModalVisibility.visible = true;
    })
  }

  getLink(): void {
    window.prompt("Share this link", window.location.href);
  }

  getTotalRating(): number {
    let sum = 0;
    this.tokens.forEach(item => {
      sum += item.value || 0;
    });
    return sum;
  }
}
