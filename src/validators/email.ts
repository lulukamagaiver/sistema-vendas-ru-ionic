import { FormControl } from '@angular/forms';
 
export class CustomEmailValidator {
 
    static isValid(control: FormControl): any {
        
        var re = /^([0-9]{1,10}|[a-zA-Z0-9_\-\.]{1,20}@uea\.edu\.br)$/;

        if(!re.test(String(control.value).toLowerCase())) {
            return {
                "Email inválido": true
            };
        }

        return null;
    }
 
}