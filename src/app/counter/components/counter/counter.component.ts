import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
              <p>Counter: {{counter}}</p>
              <button (click)="counterDown()">-1</button>
              <button (click)="reset()">Reset</button>
              <button (click)="counterUp()">+1</button>
            `
})

export class counterComponent {
  public counter:number = 0

  counterUp():void{
    this.counter += 1
  }

  counterDown():void{
    if(this.counter === 0) return
    this.counter -= 1
  }

  reset():void{
    this.counter = 0
  }
}
