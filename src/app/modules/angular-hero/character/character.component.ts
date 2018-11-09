import { Component, OnInit, Input, Output } from '@angular/core';
import { CoinsService } from '../coins.service';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  coins = 0;
  @Input() name: string;

  @Output()
  removeGoomba = new EventEmitter<string>();

  constructor(private coinService: CoinsService) { }

  ngOnInit() {
  }

  jumpForCoins() {
    this.coins = this.coinService.getCoins();
  }
  jump() {
    alert(this.name + ' has jumped');
  }

  crushGoomba(goombaId) {
    this.removeGoomba.next(goombaId);
    this.coins += 15;
  }

}
