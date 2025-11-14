import { FormGroup,ValidationErrors } from '@angular/forms';

export class formUtils{

static isValidField(form: FormGroup, fielName: string): boolean | null {
  return !!form.controls[fielName].errors && form.controls[fielName].touched;
}

static getFieldError(form: FormGroup, fieldName: string): string | null {
  if(!form.controls[fieldName]) return null;

  const errors = form.controls[fieldName].errors ?? {};
  return this.getTextError(errors);
} 

static getTextError(errors: ValidationErrors): string | null {

    for (const key of Object.keys(errors)) {
        switch (key) {
        case 'required':
            return 'Este campo es obligatorio';
        case 'minlength':
            return `Mínimo ${errors['minlength'].requiredLength} caracteres`;
        case 'min':
            return `El valor mínimo es ${errors['min'].min}`;
        case 'email':
            return 'Formato de correo inválido';
        default:
            return 'Campo inválido';
        }
    }
    return null;
    }
}
