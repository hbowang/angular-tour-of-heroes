import { MessagesService } from './../messages.service';
import { HeroService } from './../hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero} from '../hero';
@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };
  heroes: Hero[];
  // hero = 'Windstorm';
  selectedHero: Hero;
  constructor(private heroService: HeroService, private messageService: MessagesService) {

  }

  ngOnInit(): void {
    this.getHeroes();
  }
  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heros => this.heroes = heros);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) {return;}
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });

  }
  delete(hero: Hero): void {
    this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
  // onSelect(hero: Hero): void {
  //   this.selectedHero = hero;
  //   this.messageService.add(`Heroservice: selected into id = ${hero.id}`);
  // }
}
