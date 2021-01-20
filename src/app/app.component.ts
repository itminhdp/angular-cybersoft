import { Component } from '@angular/core';

@Component({
  // Tên component sẽ nhúng vào html
  selector: 'app-root',
  // Liên kết file html vào component
  templateUrl: './app.component.html',
  // Liên kết file css/scss vào component
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Angular2';
}
