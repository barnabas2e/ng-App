import { Hero } from './hero';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  heroes: string[];
  myHero: string[];

  //display message 
  clickMeMessage = '';

  constructor() {
    this.title = 'Tour of Heroes';
    //this.heroes = ['Superman', 'Ironman', 'Windstorm', 'Tornado'];
    this.heroes = [
      new Hero(1, 'Ironman'),
      new Hero(2, 'Superman'),
      new Hero(3, 'Batman'),
      new Hero(4, 'Windstorm')
    ];
    this.myHero = this.heroes[0];
  }

  onClickMe() {
    this.clickMeMessage = 'You are my hero!';
  }
}
