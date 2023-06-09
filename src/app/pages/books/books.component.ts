import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Router} from '@angular/router';
import { Book } from 'src/app/models/book';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';

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
    this.libros = [];
    this.booksService.getLibros()
    .subscribe((resp: Respuesta) => {
      this.libros = resp.data
    }) 
  }
  ngOnInit(): void
  {
  }
  eliminarCard(id:number):void {
    this.booksService.del(id)
    .subscribe(() => {
        let filtrado = this.libros.filter(book => book.id_book !== id);  
        this.libros = filtrado;
    })
    this.toastr.success('Se ha eliminado correctamente');
    this.booksService.getLibros()
        .subscribe((resp: Respuesta) => {
          this.libros = resp.data
        })    
  }

  oneBook(id:string){
    let number : number = Number(id)
    console.log(number)  
    this.booksService.getOne(number)
    .subscribe((librito: Book)=>{
      if(librito){
        this.libros = [librito];
        this.toastr.success("Librito encontrado")
      }else{
        this.booksService.getLibros()
        .subscribe((resp: Respuesta) => {
          this.libros = resp.data
        })    
        this.toastr.warning("Librito no existe")
      }     
    })
  }
}
