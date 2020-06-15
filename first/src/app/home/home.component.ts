import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

	nameValue: string;
	idValue: string;

  constructor() { }

  ngOnInit() {
  	
  }

  users = USERS;
  onclick(idValue, nameValue) {

  	const new_user = {id: idValue, name: nameValue};
  	this.users.push(new_user);
  }

  removeUser(id) {
	this.users.forEach( (user, index) => {
		if(user.id === id) this.users.splice(index,1);
	});
  }

  editUser(id) {

  	this.users.forEach( (user, index) => {

  		if(user.id === id) {

  			const newId = document.getElementsByName('idUser')[index].value;
  			const newName = document.getElementsByName('nameUser')[index].value;

  			this.users[index].id = newId;
  			this.users[index].name = newName;
  		}
  	});
  }
}