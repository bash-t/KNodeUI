import { Component } from '@angular/core';

import { CONFIG } from './config/general.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = CONFIG.title;
}
