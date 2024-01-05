import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private step = 'account-creation';
  constructor() { }
  public getStep(): string {
    return this.step;
  }
  public setStep(step: string) {
    this.step = step;
  }
}
