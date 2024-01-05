import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotPasswordService } from '../../services/forgot-password.service';

@Component({
  selector: 'workflow-password-assistance',
  templateUrl: './password-assistance.component.html',
  styleUrls: ['./password-assistance.component.scss']
})
export class PasswordAssistanceComponent implements OnInit {
  assitanceForm!: FormGroup;
  config: any;
  constructor(private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _forgotPasswordService:ForgotPasswordService) { }
  ngOnInit(): void {
    this.config = this._activatedRoute.snapshot.parent?.data['config'];
    this.assitanceForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }
  onSubmit() {
    if (this.assitanceForm.valid) {
      this._forgotPasswordService.setVerificationCodeEmail(this.email?.value);
      this._router.navigate(['reset-password/verification-code']);
    }
  }

  get email() {
    return this.assitanceForm.get('email');
  }
  get emailErrorMessage() {
    if (this.email?.hasError('required')) {
      return this.config?.email?.errors?.required;
    }
    if (this.email?.hasError('email')) {
      return this.config?.email?.errors?.invalidEmail;
    }
    return '';
  }

}
