import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { MyFormComponent } from './my-form/my-form.component';

import { UserProfileComponent } from './user-profile/user-profile.component';

import { SignUpComponent } from './sign-up/sign-up.component';

const ROUTES: Routes = [
  //{ path: 'home', component: HomeComponent },

  //{ path: 'contact', component: ContactComponent },

  { path: 'user', component: UserProfileComponent },

  { path: 'sign-up', component: SignUpComponent},

  //{ path: 'form', component: MyFormComponent},

  {
    path: '',
    redirectTo: '/user',
    pathMatch: 'full'
  },
 
];

export { ROUTES };

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
