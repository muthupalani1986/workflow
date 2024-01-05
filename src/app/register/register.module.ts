import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RegisterRoutingModule } from './register-routing.module';
import { RegisterComponent } from './register.component';
import { SharedModule } from '../shared/modules/shared.module';
import { AccountCreationFormComponent } from './components/account-creation-form/account-creation-form.component';
import { BusinessDetailsFormComponent } from './components/business-details-form/business-details-form.component';
import { FinishFormComponent } from './components/finish-form/finish-form.component';


@NgModule({
  declarations: [
    RegisterComponent,
    AccountCreationFormComponent,
    BusinessDetailsFormComponent,
    FinishFormComponent
  ],
  imports: [
    CommonModule,
    RegisterRoutingModule,
    SharedModule
  ]
})
export class RegisterModule { }
