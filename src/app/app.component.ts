import { Component } from '@angular/core';
import { divTrigger } from './app.animation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [divTrigger]
})
export class AppComponent {
  isVisible = false;
}
