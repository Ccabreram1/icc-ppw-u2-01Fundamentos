import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Proyectos } from '../proyectos/proyectos';
import { ProyectosService } from './servicios/proyectos-service';
import { ListadoProyectos } from '../proyectos/componentes/listado-proyectos/listado-proyectos';
import { AddProyecto } from '../proyectos/componentes/add-proyecto/add-proyecto';

@Component({
  selector: 'app-proyectos2',
  imports: [ListadoProyectos, AddProyecto],
  templateUrl: './proyectos2.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class Proyectos2 { 
  proyectosService = inject(ProyectosService);


}
