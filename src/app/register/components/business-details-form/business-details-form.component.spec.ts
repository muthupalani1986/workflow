import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDetailsFormComponent } from './business-details-form.component';

describe('BusinessDetailsFormComponent', () => {
  let component: BusinessDetailsFormComponent;
  let fixture: ComponentFixture<BusinessDetailsFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BusinessDetailsFormComponent]
    });
    fixture = TestBed.createComponent(BusinessDetailsFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
