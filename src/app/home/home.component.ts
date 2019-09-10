import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  public info = {
    title1: 'title1',
    title2: 'title2',
    title3: 'title3'
  };
}
