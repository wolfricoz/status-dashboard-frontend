import {Component, inject, Input, isDevMode} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {readableStreamLikeToAsyncGenerator} from 'rxjs/internal/util/isReadableStreamLike';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-servicestatus',
  templateUrl: './servicestatus.component.html',
  styleUrl: './servicestatus.component.css',
  imports: [
    NgClass,
    NgIf
  ],
  standalone: true,
  providers: []
})


export class ServicestatusComponent {
  private http = inject(HttpClient)
  status = 'backend down';
  high = 0;
  med = 0;
  low = 0;
  last_updated_at = '';
  selected = false;
  @Input() service!: Service;


  getstatus(): any {
    // Make a GET request to the API endpoint
    console.log("Refreshing status for service: " + this.service.name)
    if (!isDevMode()){
      this.http.post<any>(`api/status/${this.service.name}`, {}).subscribe(data => {
        this.status = data.status;
        this.high = data.high;
        this.med = data.medium;
        this.low = data.low;
        this.setdate()

      })
    } else {
      this.http.post<any>(`https://status.roleplaymeets.com/api/status/${this.service.name}`, {}).subscribe(data => {
      this.status = data.status;
      this.high = data.high;
      this.med = data.medium;
      this.low = data.low;
      this.setdate()

    })
    }

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
