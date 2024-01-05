import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResetPasswordComponent } from './reset-password.component';
import { PasswordAssistanceComponent } from './components/password-assistance/password-assistance.component';
import { VerificationCodeComponent } from './components/verification-code/verification-code.component';

const routes: Routes = [{
  path: '',
  component: ResetPasswordComponent,
  children: [{
    path: 'assitance', component: PasswordAssistanceComponent,
  },
  {
    path: 'verification-code', component: VerificationCodeComponent,
  },
  {
    path: '',
    redirectTo: 'assitance',
    pathMatch: 'full'
  },
  {
    path: '**', pathMatch: 'full',
    redirectTo: 'assitance'
  },
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResetPasswordRoutingModule { }
