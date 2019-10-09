import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projet 2';
  public ItemParent = 'Parent';

  RecevoirEvent(value: string) {
    this.ItemParent = value;
  }
}
