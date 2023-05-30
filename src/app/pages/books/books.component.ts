import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Router} from '@angular/router';
import { Book } from 'src/app/models/book';
import { ToastrService } from 'ngx-toastr';
declare var $: any;

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  public libros: Book[];
  // public eliminado: boolean;
  
  //constructor
  constructor(public booksService: BooksService, private router: Router, private toastr: ToastrService){
    this.libros = this.booksService.getAll()
  }
  ngOnInit(): void
  {
  }

  eliminarCard(id:number):void {
    this.booksService.delete(id);
    this.libros = this.booksService.getAll();

    this.toastr.success('Se ha eliminado correctamente');
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
  oneBook(id:string){ 
    
    if(id == ""){
      this.libros=this.booksService.getAll();
      console.log(this.libros)
      console.log("pepe")
    }else{
      let number : number = Number(id)  
      let librobuscado: Book;
      librobuscado = this.booksService.getOne(number)
     if(librobuscado != undefined){      
      this.libros = [librobuscado]
      console.log(this.libros)
      console.log("adios")}
      else{
        this.toastr.warning('El id del libro no existe');

      }
    }
  } 
}
