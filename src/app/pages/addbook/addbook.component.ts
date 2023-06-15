import { Component, OnInit} from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Router} from '@angular/router';
import { Book } from 'src/app/models/book';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';




@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent
{
  public message: string;

  constructor(public booksService: BooksService, private router:Router, private toastr: ToastrService){
    this.message = null;
  }  

  newLibro(newIDUser: HTMLInputElement, newTitle: HTMLInputElement,newType: HTMLInputElement,newAuthor: HTMLInputElement,newPrice: HTMLInputElement,newPhoto: HTMLInputElement,newLink:HTMLInputElement){
    let nuevo: Book = new Book(0,parseInt(newIDUser.value), newTitle.value,newType.value,newAuthor.value,parseInt(newPrice.value),newPhoto.value,newLink.value)
    this.booksService.add(nuevo)
    .subscribe((data: string) =>
      {
        if (data != "-1")
        {
          newIDUser.value = "";
          newTitle.value = "";
          newPhoto.value = "";
          newAuthor.value = "";
          newLink.value = "";
          newType.value = "";
        }else{
          console.log("Error al insertar el usuario")
        }
      })
  }
}

