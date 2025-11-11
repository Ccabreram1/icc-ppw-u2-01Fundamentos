import { ChangeDetectionStrategy, Component, signal } from '@angular/core';

@Component({
  selector: 'app-homepage',
  imports: [],
  templateUrl: './homepage.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Homepage { 
  constructor(){  
    setInterval(()=>{
      console.log("*")
      this.counterSignal.update((v)=> v+1);
    },1000
    );
  }

  counter = 0;
  counterSignal = signal(0);

  changeValue(value: number){
    this.counter += value;
    this.counterSignal.update((current)=>current+value);
  }

  resetValue(value: number){
    this.counter = value;
    this.counterSignal.set(value);
  }

}
