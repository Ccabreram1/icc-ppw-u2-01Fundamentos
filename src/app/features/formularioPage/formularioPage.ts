import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { formUtils } from '../../Utils/formUtils';

@Component({
  selector: 'app-formulario-page',
  imports: [ReactiveFormsModule],
  templateUrl: './formularioPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormularioPage {
  
onSubmit() {
  // console.log(this.myFrom)
  if (this.myFrom.invalid) {
    this.myFrom.markAllAsTouched();
    return;
  }
  console.log('Datos del formulario:', this.myFrom.value);
  alert('Formulario enviado con éxito!');
  this.myFrom.reset();
}
  formUtils = formUtils;

  private fb = inject(FormBuilder);//

  myFrom: FormGroup = this.fb.group({ //Forma larga usando FormBuilder
    nombre: ['', [Validators.required, Validators.minLength(3)]],//definimos los controles del formulario
    edad: [0, [Validators.required, Validators.min(18)]],//definimos los controles del formulario
    email: ['', [Validators.required, Validators.email]],//definimos los controles del formulario
  });

  //Forma corta usando FormControl
  //formulario = new FormGroup({//definimos los controles del formulario
    //nombre: new FormControl(''),
    //email: new FormControl(''),
  //});


}
