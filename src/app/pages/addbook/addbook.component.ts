import { Component, OnInit} from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Router} from '@angular/router';
import { Book } from 'src/app/models/book';


@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent 
{
  constructor(public booksService: BooksService, private router:Router){}
  
  newLibro(newIDBook: number,newIDUser: number, newTitle: string,newType: string,newAuthor: string,newPrice: number,newPhoto: string,newLink:string){   
      let nuevo: Book = new Book(newIDBook,newIDUser, newTitle,newType,newAuthor,newPrice,newPhoto,newLink)
      this.booksService.add(nuevo)
      alert("Se ha añadidio el libro correctamente")
    }
}

