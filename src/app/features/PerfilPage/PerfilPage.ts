import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-perfil-page',
  imports: [],
  templateUrl: './PerfilPage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PerfilPage { 
   name= signal('Sebastian');
   lastName= signal('Cabrera');
   age= signal(20);

   getFullName():string{
    return `${this.name()} ${this.lastName()} con ${this.age()} años`;
  }

   chageDate(){
    this.name.set('Ana');
    this.lastName.set('Gonzalez');
    this.age.set(25);
  }

  changeAge(){
    this.age.set(18);
  }

  resetDate(){
    this.name.set('Sebastian');
    this.lastName.set('Cabrera');
    this.age.set(20);
  }

}
