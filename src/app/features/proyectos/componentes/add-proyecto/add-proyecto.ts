import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { ListadoProyectos } from '../listado-proyectos/listado-proyectos';

@Component({
  selector: 'add-proyecto',
  imports: [],
  templateUrl: './add-proyecto.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddProyecto { 
  name = signal('');
  description = signal('');
  newProyecto = output<Proyecto>();//output para el nuevo proyecto
  removeProyecto = output<number>();//nuevo output para eliminar proyecto

  addProyecto() {
    const newProyecto: Proyecto = { 
      id: Math.floor(Math.random() * 1000), 
      nombre: this.name(),
      descripcion: this.description()
    };
    this.newProyecto.emit(newProyecto);//emitir el nuevo proyecto al componente padre
    this.name.set('');//limpiar los campos
    this.description.set('');//limpiar los campos
  }

  dellFirstProyecto(id: number) {//eliminar el primer proyecto
    this.removeProyecto.emit(id);//emitir el id del proyecto a eliminar al componente padre
  }


  changeName(value: string) {
    this.name.set(value);
  }
  changeDescription(value: string) {
    this.description.set(value);
  }
 
}

