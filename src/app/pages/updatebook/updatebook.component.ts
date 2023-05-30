import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Router} from '@angular/router';
import { Book } from 'src/app/models/book';
declare var $: any;



@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent {

  libroEditable: boolean;

  constructor(public booksService: BooksService, private router:Router){ }

  

  changeBook(idBook: number,idUser: number, changeTitle: string,changeType: string,changeAuthor: string,changePrice: number,changePhoto: string,changeLink:string){
    let editBook: Book = new Book(idBook,idUser, changeTitle,changeType,changeAuthor,changePrice,changePhoto,changeLink);
    this.libroEditable = this.booksService.edit(editBook);
  }
}
