import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {
  private verificationCodeEmail!: string
  constructor() { }
  setVerificationCodeEmail(email: string) {
    this.verificationCodeEmail = email;
  }
  getVerificationCodeEmail(): string {
    return this.verificationCodeEmail;
  }
}
