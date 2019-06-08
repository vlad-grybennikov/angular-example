import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const URL = 'https://test-users-api.herokuapp.com/users/';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }

  static users = [{
    name: 'Test',
    description: 'Test'
  }];

  async receiveUsers() {
    const users = await fetch(URL).then(res => res.json());
    UsersService.users = users.data.map((user) => ({
      name: user.name,
      description: user.age
    }));
  }

  async addUser(name: string, description: string) {
    const newUser = await fetch(URL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        age: description
      })
    }).then((res) => res.json());
    UsersService.users.push({
      name: newUser.data.name,
      description: newUser.data.age
    });
    return newUser;
  }

  getUsers() {
    return UsersService.users;
  }
}
