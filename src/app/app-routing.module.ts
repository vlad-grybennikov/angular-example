import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {UsersComponent} from './users/users.component';
import {AddUserComponent} from './add-user/add-user.component';

let name: string;
name = 'Vlad';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'users',
    component: UsersComponent
  },
  {
    path: 'users/new',
    component: AddUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
