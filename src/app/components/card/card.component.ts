import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Book } from 'src/app/models/book';
import { Router} from '@angular/router';


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

  //CONSTRUCTOR

  constructor(public booksService: BooksService, private router: Router){}

  goBook(){
    this.router.navigate(['/pimpampum1'])
  }

  closeCard(){
    this.borrarCard.emit(this.libroPadre.id_book);
  }
  ngOnInit(): void
  {
  }
}
