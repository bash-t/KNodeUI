import { Component, OnInit, Input } from '@angular/core';
import { Actuator } from '../../../actuator';

@Component({
  selector: 'app-roller-blind',
  templateUrl: './roller-blind.component.html',
  styleUrls: ['./roller-blind.component.css']
})
export class RollerBlindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() actuator: Actuator;
}
