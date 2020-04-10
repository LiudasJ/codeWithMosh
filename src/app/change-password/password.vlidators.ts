import { AbstractControl } from '@angular/forms';
import { NullTemplateVisitor } from '@angular/compiler';

export class PasswordValidators {
    static validOldPassword(control: AbstractControl) {
        return new Promise((resolve) => {
            if (control.value !== '1234')
                resolve ({invalidOldPassword: true });
            else
                resolve(null)
        })
    }

    static passwordShouldMatch(control: AbstractControl) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
            if (newPassword.value !== confirmPassword.value )
                return {passwordShouldMatch: true};
            return null;
    }
}