import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';
import {HttpClient} from '@angular/common/http';

const users = [{
  name: 'Vlad',
  avatar: 'https://i.pinimg.com/736x/1a/14/93/1a149387bff07d64e0a7605509510b43.jpg',
  description: 'Test'
}, {
  name: 'Maxim',
  avatar: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
}, {
  name: 'Hryhorii',
  avatar: 'https://static.wixstatic.com/media/ed38f5_33d8f56990da475db78ac9599a4bed4c~mv2_d_1795_2015_s_2.jpg/v1/fill/w_315,h_354,al_c,q_80,usm_0.66_1.00_0.01/ed38f5_33d8f56990da475db78ac9599a4bed4c~mv2_d_1795_2015_s_2.jpg'
}];

const emptyUsers = [];

interface User {
  name: string;
  avatar?: string;
  description?: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  constructor(private http: HttpClient) { }
  private usersService = new UsersService(this.http);
  users: User[] = this.usersService.getUsers();
  deleteUsers() {
    this.users = emptyUsers;
  }
  async ngOnInit() {
    await this.usersService.receiveUsers();
    this.users = this.usersService.getUsers();
  }

}
