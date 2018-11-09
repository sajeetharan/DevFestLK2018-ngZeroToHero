import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-world',
  templateUrl: './world.component.html',
  styleUrls: ['./world.component.css']
})
export class WorldComponent implements OnInit {

  enemies: Array<string> = ['0', '1', '2', '3'];
  constructor() { }

  ngOnInit() {
  }

  removeGoomba(id: string) {
    const i = this.enemies.indexOf(id);
    if (i !== -1) {
      this.enemies.splice(i, 1);
    }
  }

}
