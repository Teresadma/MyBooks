import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books : Book[]; 
  constructor() {
    this.books = [
      new Book (1,1,"Pim, Pam y Pum","Cuento","Nano",5,"/assets/img/LosMundosdeNano/pimpampum1.png","pimpampum1"),
      new Book (2,1,"Diario de un no papá","Cuento","Nano",5,"/assets/img/LosMundosdeNano/diariopapa.png","papa"),
      new Book (3,1,"La paz ya no depende de ti","Novela","Nano",5,"/assets/img/LosMundosdeNano/lapazyano.png","paz"),
      new Book (4,1,"La patrulla águila","Cuento","Nano",5,"/assets/img/LosMundosdeNano/patrullaaguila.png","aguila"),
      new Book (5,1,"Nuestros héroes","Cuento","Nano",5,"/assets/img/LosMundosdeNano/nuestroheroes.png","heroe"),
      new Book (6,1,"Ha nacido una estrella","Cuento","Nano",5,"/assets/img/LosMundosdeNano/estrella.png","estrella"),
      new Book (7,1,"El androide sin nombre","Cuento","Nano",5,"/assets/img/LosMundosdeNano/androide.png","androide"),
    ];
  }
  //METODOS
  public getAll():Book[]{    
    return this.books;
  }
  public getOne(id_libro:number):Book{
    console.log("hola")
    let filtro = this.books.find(book => book.id_book === id_libro);  
    // console.log(filtro)
    // let filtro = this.books.filter(book => book.id_book === id_libro);
   
    return filtro
  }
  public add(book: Book):void{
     this.books.push(book);
  }
  public edit(book:Book):boolean{
    console.log(book)
    let idBook = this.books.findIndex(libro => libro.id_book === book.id_book);
    console.log(idBook) 
    console.log(this.books[idBook])
    this.books[idBook] = book;
    console.log(this.books[idBook])
    return true;
  }

  public delete(id_book:number):boolean{
    let books_length = this.books.length;
    let filtrado = this.books.filter(book => book.id_book !== id_book);  
    this.books = filtrado;
    console.log(filtrado)
    return true;
    // for(let i=0; i<this.books.length;i++){
    //   if(this.books[i].id_book == id_book){
    //     this.books.splice(i,1);
    //   }
    // }return true;
  }
}