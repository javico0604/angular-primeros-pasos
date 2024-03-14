import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name:string = 'ironman';
  public age:number = 45;

  get capitalizaName():string{
    return this.name.toUpperCase()
  }

  get heroDescription():string{
    return `Name: ${this.name} - Edad: ${this.age}`
  }

  changeAge():void {
    this.age = 25
  }

  changeName():void {
   this.name = 'Spiderman'
  }

}
