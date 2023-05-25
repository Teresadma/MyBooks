import { Component } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  public libros : Book[];
  
  //constructor
  constructor(){
    this.libros = [
      new Book (1,1,"Pim, Pam y Pum","Cuento","Nano",5,"/assets/img/LosMundosdeNano/pimpampum1.png"),
      new Book (2,1,"Diario de un no papá","Cuento","Nano",5,"/assets/img/LosMundosdeNano/diariopapa.png"),
      new Book (3,1,"La paz ya no depende de ti","Novela","Nano",5,"/assets/img/LosMundosdeNano/lapazyano.png"),
      new Book (4,1,"La patrulla águila","Cuento","Nano",5,"/assets/img/LosMundosdeNano/patrullaaguila.png"),
      new Book (5,1,"Nuestros héroes","Cuento","Nano",5,"/assets/img/LosMundosdeNano/nuestroheroes.png"),
      new Book (6,1,"Ha nacido una estrella","Cuento","Nano",5,"/assets/img/LosMundosdeNano/estrella.png"),
      new Book (7,1,"El androide sin nombre","Cuento","Nano",5,"/assets/img/LosMundosdeNano/androide.png"),
    ]
  }
    newLibro( newIDBook: number,newIDUser: number, newTitle: string,newType: string,newAuthor: string,newPrice: number,newPhoto: string){
      let nuevo: Book = new Book(newIDBook,newIDUser, newTitle,newType,newAuthor,newPrice,newPhoto)
      this.libros.push(nuevo)
    }
  eliminarCard(index:number) {
    this.libros.splice(index,1)
  }
}

