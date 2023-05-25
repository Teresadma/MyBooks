import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit
{
  @Input() libroPadre: Book;
  @Input() esPar: boolean;
  @Output() borrarCard =  new EventEmitter<number>();  

  constructor(){}
  closeCard(){
        this.borrarCard.emit();
  }
    ngOnInit(): void
    {
    } 
}
