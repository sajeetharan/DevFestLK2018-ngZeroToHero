import { Component, OnInit, Input , Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-goomba',
  templateUrl: './goomba.component.html',
  styleUrls: ['./goomba.component.css']
})
export class GoombaComponent implements OnInit {

  @Input() id: string;
  @Output()
  removeGoomba = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

  crushGoomba() {
    this.removeGoomba.next(this.id);
  }

}
