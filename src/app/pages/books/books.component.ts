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
