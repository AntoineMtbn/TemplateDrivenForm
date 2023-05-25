import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

import { UserProfileComponent } from './user-profile/user-profile.component';

import { SignupComponent } from './signup/signup.component';

const ROUTES: Routes = [
  //{ path: 'home', component: HomeComponent },

  //{ path: 'contact', component: ContactComponent },

  { path: 'user', component: UserProfileComponent },

  { path: 'signup', component: SignupComponent },
];

export { ROUTES };

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
