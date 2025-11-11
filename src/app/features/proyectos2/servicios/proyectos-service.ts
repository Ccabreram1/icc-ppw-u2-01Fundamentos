import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProyectosService {
  
  constructor() {

    effect(( ) => {//efecto para sincronizar con el almacenamiento local
      const data = this.proyectos();//obtener el valor actual de la señal
      console.log(data);//imprimir en consola
      console.log(JSON.stringify(data));//imprimir en consola como JSON
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));//guardar en el almacenamiento local
    });

    effect(( ) => {//efecto para sincronizar con el almacenamiento local
      const data = this.proyectosDos();//obtener el valor actual de la señal
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(data));//guardar en el almacenamiento local
    });
    
   }

  private readonly STORAGE_KEY = 'ProyectosApp';//clave para el almacenamiento
  proyectos = signal<Proyecto[]>(this.loadProyectos());//inicializa la señal con los datos cargados
  proyectosDos = signal<Proyecto[]>(this.loadProyectos());//inicializa la señal con los datos cargados

  private loadProyectos(): Proyecto[] {//Cargar los proyectos desde el almacenamiento local
    const data = localStorage.getItem(this.STORAGE_KEY);//obtener datos del almacenamiento local
    return data ? JSON.parse(data) : [{//datos predeterminados
      id: 1, nombre: 'Proyecto Angular',//nombre del proyecto
      descripcion: 'Descripcion.'      //descripcion del proyecto
    },];
  }

  addProyecto(newProyecto: Proyecto) {//Agregar un nuevo proyecto
    this.proyectos.set([...this.proyectos(), newProyecto]);//actualizar la señal con el nuevo proyecto
  }

  dellFirstProyecto(id: number) {//Eliminar el primer proyecto
    this.proyectos.set(this.proyectos().slice(1));
  }

}
