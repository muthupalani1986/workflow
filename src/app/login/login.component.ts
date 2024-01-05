import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginService } from './services/login.service';
import { LoginPayload, LoginResponse } from './interfaces/login';
import { SessionStorageService } from '../shared/services/storage/session-storage.service';
import { SESSION_STORAGE } from '../shared/constants/session-storage.constant';
import { AuthService } from '../shared/services/auth/auth.service';
import { Subscription } from 'rxjs';
import { ToastService } from '../shared/services/toast/toast.service';
import * as _ from 'lodash';

@Component({
  selector: 'workflow-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  payLoad!: LoginPayload;
  subscriptions: Subscription[] = [];
  loginForm!: FormGroup;
  hide = true;
  public config: any;
  constructor(private _router: Router,
    private _loginService: LoginService,
    private _sessionStorageService: SessionStorageService,
    private _authService: AuthService,
    private _formBuilder: FormBuilder,
    private _toastService: ToastService,
    private _activatedRoute: ActivatedRoute) { }
  ngOnInit() {
    this.config = this._activatedRoute.snapshot.parent?.data['config'];
    this.loginForm = this._formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  public onSubmit() {
    if (this.loginForm.valid) {
      this.payLoad = this.loginForm.getRawValue();
      this.subscriptions.push(this._loginService.login(this.payLoad).subscribe({
        next: (res: any) => {
          const statusCode = _.get(res, 'responseMetaData.statusCode');
          if (statusCode === '0000') {
            this._sessionStorageService.setItem(SESSION_STORAGE.userDetails, res);
            this._authService.setLoggedIn(true);
            this._router.navigate(['home']);
          } else {
            const statusDesc = _.get(res, 'responseMetaData.statusDesc');
            this._toastService.show(statusDesc, { type: 'danger' });
          }

        }, error: (error) => {
          this._toastService.show(error, { type: 'danger' });
        }
      }))
    }
  }
  public createAccount(): void {
    this._router.navigate(['register']);
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
      return this.config?.password?.errors?.required;
    }
    return '';
  }
  get email() {
    return this.loginForm.get('email');
  }
  get password() {
    return this.loginForm.get('email');
  }
  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe())
  }
}
