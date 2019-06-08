import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  since: number = 1956;
  constructor() { }
  iterateYear() {
    this.since += 1;
  }
  ngOnInit() { // componentDidMount in React
  }

}
