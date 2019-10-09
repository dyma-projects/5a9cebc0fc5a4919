import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-liaisons',
  templateUrl: './liaisons.component.html',
  styleUrls: ['./liaisons.component.css']
})
export class LiaisonsComponent implements OnInit {

  constructor() { }

  MonClick(event: Event): void {
    console.log('click');
  }

  ngOnInit() {
  }

}
