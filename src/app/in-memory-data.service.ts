import { Hero } from './hero';
import { Injectable } from '@angular/core';
import { InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService{

  constructor() { }
  createDb() {
    const heroes = [
      { id: 10, name: 'Dr Nice0'},
      { id: 11, name: 'Dr Nice1'},
      { id: 12, name: 'Dr Nice2'},
      { id: 13, name: 'Dr Nice3'},
      { id: 14, name: 'Dr Nice4'},
      { id: 15, name: 'Dr Nice5'},
      { id: 16, name: 'Dr Nice6'},
      { id: 17, name: 'Dr Nice7'},
      { id: 18, name: 'Dr Nice8'},
      { id: 19, name: 'Dr Nice9'},
      { id: 20, name: 'Dr Nice10'},
      { id: 21, name: 'Dr Nice11'}
    ];
    return {heroes};
  }
  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
