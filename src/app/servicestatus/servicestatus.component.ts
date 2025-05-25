import {Component, inject, Input, input} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, Observable, Subject, switchMap, takeWhile, tap, timer} from 'rxjs';
import {readableStreamLikeToAsyncGenerator} from 'rxjs/internal/util/isReadableStreamLike';
import {AsyncPipe, DatePipe, NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-servicestatus',
  templateUrl: './servicestatus.component.html',
  styleUrl: './servicestatus.component.css',
  imports: [
    NgClass,
    NgIf
  ],
  providers: []
})



export class ServicestatusComponent {
  private http = inject(HttpClient)
  status = 'Background service is not running';
  last_updated_at = '';
  selected = false;
  @Input() service!: Service;


  getstatus(): any {
    // Make a GET request to the API endpoint
    console.log("Refreshing status for service: " + this.service.name)
    console.log(this.service.name)
    this.http.post<any>(`http://127.0.0.1:8000/api/${this.service.name}`, {}).subscribe(data => {
      this.status = data.status;
      this.setdate()

    })
  }

  setdate() {
    // Set the date to the current date and time
    const temp_date = new Date()
    this.last_updated_at = Intl.DateTimeFormat('default', {
      hour12: true,
      hour: 'numeric',
      minute: 'numeric',
    }).format(temp_date)
  }

  // Ran when the component is initialized
  ngOnInit() {
    this.getstatus();
    this.setdate()
    setInterval(() => {
      this.getstatus();

    }, 300000);
  }

  protected readonly readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;
}
interface Service {
  name: string;
  fields: { [key: string]: string };
  description: string;
  url: string;
}
