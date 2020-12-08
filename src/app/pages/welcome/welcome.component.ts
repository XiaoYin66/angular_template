import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
  testDataList: any[] = [];

  constructor() { }

  ngOnInit() {
    for (let index = 0; index < 1000; index++) {
      this.testDataList.push("hello");
      
    }
  }

}
