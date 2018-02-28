import { Component, OnInit } from '@angular/core';

import { ActuatorService } from '../actuator.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private actuatorService: ActuatorService) { }

  isCollapsed: boolean;
  deviceTypes: String[]; //populated by actuator.service for the nav pills
  buildings: String[]; //populated by actuator.service for the nav pills

  ngOnInit() {
    this.isCollapsed = true;
    this.getDeviceTypes();
    //this.getBuildings();
  }

  getDeviceTypes(): void {
    this.deviceTypes = this.actuatorService.getDeviceTypes();
  }

  getBuildings(): void {
    this.buildings = this.actuatorService.getBuildings();
  }
}
