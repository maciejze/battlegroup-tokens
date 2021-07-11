import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {GamesService} from "../service/games.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  gameId: string = '';
  tokens: Array<{name: 'string', value: number}> = [];

  constructor(private route: ActivatedRoute, private gamesService: GamesService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      console.log(params);
      this.gameId = params.id;
    })
  }

  drawToken(): void {
    this.gamesService.drawToken(this.gameId).subscribe(token => {
      console.log(token);
      this.tokens.push(token);
    })
  }

}
