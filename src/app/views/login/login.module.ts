import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [SignUpComponent, SignInComponent, LoginComponent],
  imports: [CommonModule, LoginRoutingModule],
})
export class LoginModule {}
