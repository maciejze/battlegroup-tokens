import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./components/home/home.component";
import {GameComponent} from "./components/game/game.component";

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  pathMatch: 'full'
}, {
  path: 'game',
  component: GameComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
