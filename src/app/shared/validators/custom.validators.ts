import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from '@angular/forms';

export class CustomValidators {
    static MatchValidator(controlName: string, matchingControlName: string) {
        return (formGroup: FormGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl?.errors && !matchingControl?.errors['mismatch']) {
                return;
            }
            if (control?.value !== matchingControl?.value) {
                matchingControl?.setErrors({ mismatch: true });
            } else {
                matchingControl?.setErrors(null);
            }
        }
    
    }
}
