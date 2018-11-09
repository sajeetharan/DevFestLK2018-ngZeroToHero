import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoinsService {

  constructor() { }

  getCoins() {
    return 100;
  }
}
