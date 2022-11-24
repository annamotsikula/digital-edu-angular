import { AbstractControl } from "@angular/forms";

export function ageValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if(control.value !== undefined && (control.value < 18 || control.value > 60)) {
        return { 'ageNotFit': true }
    }
    if(control.value !== undefined && isNaN(control.value)) {
        return { 'typeNotMatch': true }
    }
    return null
}

