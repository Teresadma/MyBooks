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
  // public eliminado: boolean;
  
  //constructor
  constructor(public booksService: BooksService, private router: Router, private toastr: ToastrService, public userService: UserService){
    this.libros = [];
    if (this.userService.logueado) {
      this.logueado()
    }
    // console.log(this.userService.logueado)
    // console.log(this.userService.user.id_user)
    // if (this.userService.logueado) {
    //   this.booksService.getLibros().subscribe((resp: Respuesta) => {
    //     this.libros = resp.data;
    //   });
    // }
    }
    
    // this.booksService.getLibros(this.userService.user.id_user)
    // .subscribe((resp: Respuesta) => {
    //   console.log(this.userService.user.id_user)
    //   this.libros = resp.data
    // })
  
  ngOnInit(): void
  {

  }
  logueado (): void{
    this.booksService.getLibros()
    .subscribe((libritos: Book[]) => {
      if(libritos && libritos.length > 0){
        this.libros = libritos;
        console.log(libritos)
      }else{
        this.libros = [];
        console.log("caca")
      }
    },
    (error)=>{
      console.log(error)
    });   
  }

  
  oneBook(id:string){
    let number : number = Number(id)
    console.log(number)  
    this.booksService.getLibroID(number)
    .subscribe((librito: Book)=>
    {
      if (id == "" || id == null || id == undefined){
        this.booksService.getLibros()
        .subscribe((libritos: Book[]) => {
          if(libritos && libritos.length > 0){
            this.libros = libritos;
            console.log("teta")
          }
        })    
        
      }else{
        this.libros = [librito[0]];
        console.log("pito")
        // this.toastr.success("Librito encontrado")
      }
    },
    (error)=>{
      console.log(error)
    }
    )
  }

    eliminarCard(id:number):void {
    this.booksService.del(id)
    .subscribe(() => {
        let filtrado = this.libros.filter(book => book.id_book !== id);  
        this.libros = filtrado;
        this.toastr.success('Se ha eliminado correctamente');
    })
    this.booksService.getLibros()
        .subscribe((librito: Book[]) => {
          this.libros = librito
        },
        (error)=>{
          console.log("Algo va mal", error)
        })    
  }
}


