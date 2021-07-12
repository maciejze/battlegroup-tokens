import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ApiService} from "./service/api.service";
import {HttpClientModule} from "@angular/common/http";
import {GamesService} from "./service/games.service";
import { TokenModalComponent } from './components/token-modal/token-modal.component';
import {HomeComponent} from "./components/home/home.component";
import {GameComponent} from "./components/game/game.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GameComponent,
    TokenModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [ApiService, GamesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
