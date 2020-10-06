import { Component } from '@angular/core';

@Component({
  selector: 'app-my-ng-for-test',
  templateUrl: './my-ng-for-test.component.html',
  styleUrls: ['./my-ng-for-test.component.css']
})
export class MyNgForTestComponent {
  myObject = {
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    five: 5,
  };
  myArray = [6,7,8,9,10,];
}
