import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ForgotPasswordService } from '../../services/forgot-password.service';

@Component({
  selector: 'workflow-verification-code',
  templateUrl: './verification-code.component.html',
  styleUrls: ['./verification-code.component.scss']
})
export class VerificationCodeComponent {
  verificationCodeForm!: FormGroup;
  config: any;
  constructor(private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _forgotPasswordService:ForgotPasswordService) { }
  ngOnInit(): void {
    this.config = this._activatedRoute.snapshot.parent?.data['config'];
    this.verificationCodeForm = this._formBuilder.group({
      code: ['', [Validators.required]],
      email:[this._forgotPasswordService.getVerificationCodeEmail(),[Validators.required]]
    });
  }
  onSubmit() {
    if (this.verificationCodeForm.valid) {
      //this._router.navigate(['reset-password/verification-code']);
    }
  }

  get code() {
    return this.verificationCodeForm.get('code');
  }
  get email() {
    return this.verificationCodeForm.get('email');
  }
  get codeErrorMessage() {
    if (this.code?.hasError('required')) {
      return this.config?.code?.errors?.required;
    }
    return '';
  }
}
