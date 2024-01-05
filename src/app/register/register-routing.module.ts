import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register.component';
import { AccountCreationFormComponent } from './components/account-creation-form/account-creation-form.component';
import { BusinessDetailsFormComponent } from './components/business-details-form/business-details-form.component';
import { FinishFormComponent } from './components/finish-form/finish-form.component';

const routes: Routes = [
  {
    path: '', component: RegisterComponent,
    children: [{
      path: 'account-creation', component: AccountCreationFormComponent,
    },
    {
      path: 'business-details', component: BusinessDetailsFormComponent,
    },
    {
      path: 'finish', component: FinishFormComponent,
    },
    {
      path: '',
      redirectTo: 'account-creation',
      pathMatch: 'full'
    },
    {
      path: '**', pathMatch: 'full',
      redirectTo: 'account-creation'
    },
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegisterRoutingModule { }
