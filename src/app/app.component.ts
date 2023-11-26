import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // title = 'vin-vue';
  constructor(private titleService: Title) {
    this.titleService.setTitle('VIN-VUE');
  }

  onActivate(event: any) {
    window.scrollTo(0, 400);
  }
}
