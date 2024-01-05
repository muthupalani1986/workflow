import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../../services/register.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomValidators } from 'src/app/shared/validators/custom.validators';

@Component({
  selector: 'workflow-account-creation-form',
  templateUrl: './account-creation-form.component.html',
  styleUrls: ['./account-creation-form.component.scss']
})
export class AccountCreationFormComponent implements OnInit {
  duplicateCheckForm!: FormGroup;
  accountCreationForm!: FormGroup;
  verifyEmailForm!: FormGroup;
  config: any;
  accountCreationStep = 'check-email';
  constructor(private _formBuilder: FormBuilder,
    public _registerService: RegisterService,
    private _activatedRoute: ActivatedRoute,
    private _router: Router) { }
  ngOnInit() {
    this.config = this._activatedRoute.snapshot.parent?.data['config'];
    this.accountCreationForm = this._formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validator: CustomValidators.MatchValidator('password', 'confirmPassword')
    });
    this.duplicateCheckForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
    this.verifyEmailForm = this._formBuilder.group({
      otp: ['', [Validators.required]]
    });
  }
  get name() {
    return this.accountCreationForm.get('name');
  }
  get email() {
    return this.accountCreationForm.get('email');
  }
  get password() {
    return this.accountCreationForm.get('password');
  }
  get confirmPassword() {
    return this.accountCreationForm.get('confirmPassword');
  }
  get duplicateEmail() {
    return this.duplicateCheckForm.get('email');
  }
  get otp() {
    return this.verifyEmailForm.get('otp');
  }

  public get emailErrorMessage() {
    if (this.email?.hasError('required')) {
      return this.config?.email?.errors?.required;
    }
    if (this.email?.hasError('email')) {
      return this.config?.email.errors?.invalidEmail;
    }
    return '';
  }
  get passwordErrorMessage() {
    if (this.password?.hasError('required')) {
      return this.config?.password.errors?.required;
    }
    if (this.password?.hasError('minlength')) {
      return 'Enter At least 8 characters';
    }
    return ''
  }

  get confirmPasswordErrorMessage() {
    if (this.confirmPassword?.hasError('required')) {
      return this.config?.confirmPassword?.errors?.required;
    }
    if (this.confirmPassword?.hasError('mismatch')) {
      return this.config?.confirmPassword?.errors?.mismatch;
    }
    return ''
  }

  get nameErrorMessage() {
    if (this.name?.hasError('required')) {
      return this.config?.name?.errors?.required;
    }
    return ''
  }

  public get duplicateEmailErrorMessage() {
    if (this.duplicateEmail?.hasError('required')) {
      return this.config?.email?.errors?.required;
    }
    if (this.duplicateEmail?.hasError('email')) {
      return this.config?.email.errors?.invalidEmail;
    }
    return '';
  }

  public get otpErrorMessage() {
    if (this.otp?.hasError('required')) {
      return this.config?.otp?.errors?.required;
    }
    return '';
  }

  public onSubmitDuplicateCheck() {
    if (this.duplicateCheckForm.valid) {
      const payLoad = this.duplicateCheckForm.getRawValue();
      this.accountCreationStep = 'choose-password';
      this.accountCreationForm?.patchValue({
        email: payLoad.email
      });
    }
  }

  public onSubmit() {
    if (this.accountCreationForm.valid) {
      this.accountCreationStep = 'verify-email';
    }
  }
  public onSubmitVerifyEmail() {
    if (this.verifyEmailForm.valid) {
      const payLoad = this.accountCreationForm.getRawValue();
      this._registerService.setStep('business-details');
      this._router.navigate(['register/business-details']);
    }
  }
  public changeEmail(){
    this.accountCreationStep = 'choose-password';
  }
}
