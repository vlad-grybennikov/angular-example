import {Component, OnInit} from '@angular/core';
import {UsersService} from '../users/users.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  private usersService = new UsersService(this.http);
  name: string = '';
  description: string = '';

  sendUser() {
    if (this.name.length > 0 && this.description.length > 0) {
      this.usersService.addUser(this.name, this.description);
    } else {
      alert('Не корректно заполнены данные');
    }
  }

  ngOnInit() {
  }

}
