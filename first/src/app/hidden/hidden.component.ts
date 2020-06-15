import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidden',
  templateUrl: './hidden.component.html',
  styleUrls: ['./hidden.component.scss']
})
export class HiddenComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  status = true;
  chooseClass = 'backGroundYellow';

  click() {
  this.status = !this.status;
  }

  changeColor() {
  	if (this.chooseClass === 'backGroundYellow') {
  		this.chooseClass = 'backGroundBlue';
  	} else {
  		this.chooseClass = 'backGroundYellow';
  	}
  }
}
