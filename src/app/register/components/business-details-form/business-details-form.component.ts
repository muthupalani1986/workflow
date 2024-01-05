import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RegisterService } from '../../services/register.service';

@Component({
  selector: 'workflow-business-details-form',
  templateUrl: './business-details-form.component.html',
  styleUrls: ['./business-details-form.component.scss']
})
export class BusinessDetailsFormComponent implements OnInit {
  businessStepOneForm!: FormGroup;
  businessStepTwoForm!: FormGroup;
  businessStepThreeForm!: FormGroup;
  businessStepFourForm!: FormGroup;
  step = 1;
  config: any;
  constructor(private _formBuilder: FormBuilder,
    private _activatedRoute: ActivatedRoute,
    private _registerService:RegisterService,
    private _router: Router) { }
  ngOnInit(): void {
    this._registerService.setStep('business-details');
    this.config = this._activatedRoute.snapshot.parent?.data['config'];
    this.businessStepOneForm = this._formBuilder.group({
      businessName: ['', Validators.required],
      doingBusinessName: ['', Validators.required],
      ein: ['', Validators.required],
      parentBusinessId: ['', Validators.required]
    });
    this.businessStepTwoForm = this._formBuilder.group({
      entityType: ['', Validators.required],
      entityOwnerName: ['', Validators.required],
      entityOwnerTitle: ['', Validators.required]
    });
    this.businessStepThreeForm = this._formBuilder.group({
      natureOfBusiness: ['', Validators.required]
    });
    this.businessStepFourForm = this._formBuilder.group({
      addressLine1: ['', Validators.required],
      addressLine2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      zipCode: ['', Validators.required],
      businessPhoneNumber: [''],
    });
  }
  onSubmitStepOne() {
    if (this.businessStepOneForm.valid) {
      this.step = 2;
    }
  }
  onSubmitStepTwo() {
    if (this.businessStepTwoForm.valid) {
      this.step = 3;
    }
  }
  onSubmitStepThree() {
    if (this.businessStepThreeForm.valid) {
      this.step = 4;
    }
  }
  onSubmitStepFour() {
    if (this.businessStepFourForm.valid) {
      this._registerService.setStep('finish');
      this._router.navigate(['register/finish']);
    }
  }
  get businessName() {
    return this.businessStepOneForm.get('businessName');
  }
  get doingBusinessName() {
    return this.businessStepOneForm.get('doingBusinessName');
  }
  get ein() {
    return this.businessStepOneForm.get('ein');
  }
  get parentBusinessId() {
    return this.businessStepOneForm.get('parentBusinessId');
  }
  get entityType() {
    return this.businessStepTwoForm.get('entityType');
  }
  get entityOwnerName() {
    return this.businessStepTwoForm.get('entityOwnerName');
  }
  get entityOwnerTitle() {
    return this.businessStepTwoForm.get('entityOwnerTitle');
  }
  get natureOfBusiness() {
    return this.businessStepThreeForm.get('natureOfBusiness');
  }
  get addressLine1() {
    return this.businessStepFourForm.get('addressLine1');
  }
  get addressLine2() {
    return this.businessStepFourForm.get('addressLine2');
  }
  get city() {
    return this.businessStepFourForm.get('city');
  }
  get state() {
    return this.businessStepFourForm.get('state');
  }
  get zipCode() {
    return this.businessStepFourForm.get('zipCode');
  }
  get businessPhoneNumber() {
    return this.businessStepFourForm.get('businessPhoneNumber');
  }
  get businessNameErrorMessage() {
    if (this.businessName?.hasError('required')) {
      return this.config?.businessName?.errors?.required;
    }
    return '';
  }
  get doingBusinessNameErrorMessage() {
    if (this.doingBusinessName?.hasError('required')) {
      return this.config?.doingBusinessName?.errors?.required;
    }
    return '';
  }
  get einErrorMessage() {
    if (this.ein?.hasError('required')) {
      return this.config?.ein?.errors?.required;
    }
    return '';
  }
  get parentBusinessIdErrorMessage() {
    if (this.parentBusinessId?.hasError('required')) {
      return this.config?.parentBusinessId?.errors?.required;
    }
    return '';
  }
  get entityTypeErrorMessage() {
    if (this.entityType?.hasError('required')) {
      return this.config?.entityType?.errors?.required;
    }
    return '';
  }
  get entityOwnerNameErrorMessage() {
    if (this.entityOwnerName?.hasError('required')) {
      return this.config?.entityOwnerName?.errors?.required;
    }
    return '';
  }
  get entityOwnerTitleErrorMessage() {
    if (this.entityOwnerTitle?.hasError('required')) {
      return this.config?.entityOwnerTitle?.errors?.required;
    }
    return '';
  }
  get natureOfBusinessErrorMessage() {
    if (this.natureOfBusiness?.hasError('required')) {
      return this.config?.industry?.errors?.required;
    }
    return '';
  }
  get addressLine1ErrorMessage() {
    if (this.addressLine1?.hasError('required')) {
      return this.config?.addressLine1?.errors?.required;
    }
    return '';
  }
  get addressLine2ErrorMessage() {
    if (this.addressLine2?.hasError('required')) {
      return this.config?.addressLine2?.errors?.required;
    }
    return '';
  }
  get cityErrorMessage() {
    if (this.city?.hasError('required')) {
      return this.config?.city?.errors?.required;
    }
    return '';
  }
  get stateErrorMessage() {
    if (this.state?.hasError('required')) {
      return this.config?.state?.errors?.required;
    }
    return '';
  }
  get zipCodeErrorMessage() {
    if (this.zipCode?.hasError('required')) {
      return this.config?.zipCode?.errors?.required;
    }
    return '';
  }
  
}
