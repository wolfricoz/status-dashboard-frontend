import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {ServicestatusComponent} from './servicestatus/servicestatus.component';
import {KeyValuePipe, NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ServicestatusComponent, NgForOf, KeyValuePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'statusdashfrontend';
  public services: Record<string, Service> = {};

  constructor() {
    fetch('config/services.json')
      .then(response => response.json())
      .then(json => {
        this.services = json;
      });
  }

  protected readonly String = String;
}


interface Service {
  name: string;
  fields: { [key: string]: string };
  description: string;
  url: string;
}
