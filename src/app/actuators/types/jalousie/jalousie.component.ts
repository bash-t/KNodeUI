import { Component, OnInit, Input } from '@angular/core';
import { Actuator } from '../../../actuator';

@Component({
  selector: 'app-jalousie',
  templateUrl: './jalousie.component.html',
  styleUrls: ['./jalousie.component.css']
})
export class JalousieComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() actuator: Actuator;
}
