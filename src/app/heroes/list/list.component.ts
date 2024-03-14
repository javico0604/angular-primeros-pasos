import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroesList:string[] = ['Ironman','Spiderman', 'Hulk', 'Thor'];
  public deletedHero?:string

  removeLastHero():void{
    this.deletedHero = this.heroesList.pop()
  }
}
