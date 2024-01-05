import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordAssistanceComponent } from './password-assistance.component';

describe('PasswordAssistanceComponent', () => {
  let component: PasswordAssistanceComponent;
  let fixture: ComponentFixture<PasswordAssistanceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PasswordAssistanceComponent]
    });
    fixture = TestBed.createComponent(PasswordAssistanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
