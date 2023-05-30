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
  public eliminado: boolean;

  constructor(public booksService: BooksService, private router: Router){}
  // eliminarCard(id:number):void {
  //   this.booksService.delete(id);
  //   alert("Se ha eliminado el libro correctamente");
  // }

  goBook(){
    this.router.navigateByUrl(this.libroPadre.link)
  }
  // eliminarCard(id_book:number):void {
  //   this.eliminado = this.booksService.delete(id);
  //   alert("Se ha eliminado el libro correctamente");
  // }

  closeCard(){
    this.borrarCard.emit(this.libroPadre.id_book);
  }
  ngOnInit(): void
  {
  }
}
