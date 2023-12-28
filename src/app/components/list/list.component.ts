import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TableList } from '../../Interface/interfaces';
import { title } from 'process';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  title!:string
  cat!:string
  price!: number
  list:TableList[]=[]

  clear():void {
    this.title = ''
    this.cat = ''
    this.price=0
  }
  AddToList(): void{
    let element: TableList={title:'t',cat:'c',price:0};
    element.title = this.title
    element.cat = this.cat
    element.price = this.price
    this.list.push(element)
    this.clear()
  }
}
