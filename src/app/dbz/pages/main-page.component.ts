import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent  {

  public characters: Character[] = [{
    name: 'Krillin',
    power: 1000
  },{
    name: 'Goku',
    power:9500
    },{
    name:'Vegeta',
    power: 7500
  }

  ];

  onNewCharacter1(character: Character):void {
    console.log("Main page");
    console.log(character);
    // this.characters.unshift(character); //agrega al inicio
    this.characters.push(character); //agrega al final
  }

  onDeleteCharacter(index: number):void {
    // console.log(this.characters.splice);
    this.characters.splice(index, 1);
  }

}
