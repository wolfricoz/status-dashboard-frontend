import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {ServicestatusComponent} from './servicestatus/servicestatus.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ServicestatusComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'statusdashfrontend';
}
