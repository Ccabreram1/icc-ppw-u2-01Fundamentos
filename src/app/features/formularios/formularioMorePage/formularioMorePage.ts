import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { formUtils } from '../../../Utils/formUtils';

@Component({
  selector: 'app-formulario-more-page',
  imports: [ReactiveFormsModule],
  templateUrl: './formularioMorePage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioMorePage {
  
  private fb = inject(FormBuilder);
  formUtils = formUtils;

  myForm: FormGroup = this.fb.group({
    genero: ['M', [Validators.required]],
    notificaciones: [true, [Validators.required]],
    condiciones: [false, [Validators.requiredTrue]],
  });

  onSubmit() {
    this.myForm.markAllAsTouched();

    if (this.myForm.invalid) return;

    console.log('Datos enviados:', this.myForm.value);
    alert('Formulario válido. Datos registrados correctamente.');
  }
}
