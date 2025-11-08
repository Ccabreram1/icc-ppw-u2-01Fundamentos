import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { Proyectos2 } from '../proyectos2/proyectos2';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class Proyectos {

    name = signal('');
    description = signal('');

    proyectos = signal<Proyecto[]>([
        {
            id: 1, nombre: 'Proyecto Angular',
            descripcion: 'Descripcion.'
        },
    ]);


     changeName(value: string) {
        this.name.set(value);

      }
      changeDescription(value: string) {
        this.description.set(value);
      }

      addProyecto() {
        const newProyecto: Proyecto = { 
            id: this.proyectos().length + 1, 
            nombre: this.name(),
            descripcion: this.description()
        };
        this.proyectos.set([...this.proyectos(), newProyecto]); 
        this.name.set('');
        this.description.set('');
        }
}