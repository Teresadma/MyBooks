import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Router} from '@angular/router';
import { Book } from 'src/app/models/book';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';
import { UserService } from 'src/app/shared/user.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  public libros: Book[];

  constructor(public booksService: BooksService, private router: Router, private toastr: ToastrService, public userService: UserService){
    this.libros = [];
    this.booksService.getLibros()
    .subscribe((res: Respuesta) => {
      this.libros = res.data;
      console.log(res)
    })

  }

  
  ngOnInit(): void {}

 
  oneBook(id:string){
    let number : number = Number(id)
    console.log(number)  
    this.booksService.getLibroID(number)
    .subscribe((res: Respuesta)=>
    {
      if (id == "" || id == null || id == undefined || res.mensaje == "No hay libros"){
        this.booksService.getLibros()
        .subscribe((res: Respuesta) => {
          this.libros = res.data;
          console.log(res)          
        })    
      }else{
        this.libros = res.data;
        console.log(this.libros)
        console.log("pito")
        // this.toastr.success("Librito encontrado")
      }
    })

  eliminarCard(id:number):void {
  console.log(id)
  this.booksService.del(id)
  .subscribe(() => {
      let filtrado = this.libros.filter(book => book.id_book !== id);  
      this.libros = filtrado;
      console.log(this.libros)
      this.toastr.success('Se ha eliminado correctamente');
    })
}}


