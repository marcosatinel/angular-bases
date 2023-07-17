import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {



  @Input()
  public characterList: Character[] = [{
    // id:'',
    name:'Trunk',
    power: 10
  }]


  @Output()
  // public onDelete: EventEmitter<number> = new EventEmitter();
  public onDelete: EventEmitter<string> = new EventEmitter();

  // onDeleteCharacter(index: number):void {
  //   console.log("Index: ", index);
  //   this.onDelete.emit(index);
  // }
  onDeleteCharacter(id?: string):void {
    if (!id) return;

    console.log("ID: ", id);
    this.onDelete.emit(id);
  }

}
""
