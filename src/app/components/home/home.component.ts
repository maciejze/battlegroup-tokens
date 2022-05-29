import { Component, OnInit } from '@angular/core';
import {GamesService} from "../../service/games.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private gamesService: GamesService, private router: Router) { }

  ngOnInit(): void {
  }

  createNewGame(type: string): void {
    this.gamesService.createNewGame(type).subscribe(next => {

      this.router.navigate(['game'], {queryParams: {id: next.id}})
    })
  }

}
