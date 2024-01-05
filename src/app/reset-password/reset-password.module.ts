import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResetPasswordRoutingModule } from './reset-password-routing.module';
import { ResetPasswordComponent } from './reset-password.component';
import { SharedModule } from '../shared/modules/shared.module';
import { PasswordAssistanceComponent } from './components/password-assistance/password-assistance.component';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';


@NgModule({
  declarations: [
    ResetPasswordComponent,
    PasswordAssistanceComponent,
    VerificationCodeComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ResetPasswordRoutingModule
  ]
})
export class ResetPasswordModule { }
