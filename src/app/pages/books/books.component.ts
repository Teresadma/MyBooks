import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Router} from '@angular/router';
import { Book } from 'src/app/models/book';
declare var $: any;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  //constructor
  constructor(public booksService: BooksService, private router: Router){}
  ngOnInit(): void
  {
  }

  eliminarCard(id:number):void {
    this.booksService.delete(id);
    alert("Se ha eliminado el libro correctamente");
  }
  oneBook(id:number):Book{    
    // return this.booksService.getOne(id);
    // let libros = this.booksService.getAll();
    // let idlibro = $("idbook") 
    return    

    newLibro( newIDBook: number,newIDUser: number, newTitle: string,newType: string,newAuthor: string,newPrice: number,newPhoto: string){
      let nuevo: Book = new Book(newIDBook,newIDUser, newTitle,newType,newAuthor,newPrice,newPhoto)
      this.libros.push(nuevo)
    }
  eliminarCard(libroPadre:Book) {
    let filtrado = this.libros.filter(libroDelete => libroDelete.id_book != libroPadre.id_book);
    this.libros = filtrado;

  }
}
