import { Component } from '@angular/core';
import { BooksService } from 'src/app/shared/books.service';
import { Router} from '@angular/router';
import { Book } from 'src/app/models/book';
import { ToastrService } from 'ngx-toastr';
import { Respuesta } from 'src/app/models/respuesta';




@Component({
  selector: 'app-updatebook',
  templateUrl: './updatebook.component.html',
  styleUrls: ['./updatebook.component.css']
})
export class UpdatebookComponent {

  libroEditable: boolean;

constructor(public booksService: BooksService, private router:Router, private toastr: ToastrService){ }

  

changeBook(idBook: HTMLInputElement,changeidUser: HTMLInputElement, changeTitle: HTMLInputElement,changeType: HTMLInputElement,changeAuthor: HTMLInputElement,changePrice: HTMLInputElement,changePhoto: HTMLInputElement,changeLink:HTMLInputElement){
    let editBook: Book = new Book(parseInt(idBook.value),parseInt(changeidUser.value), changeTitle.value,changeType.value,changeAuthor.value,parseInt(changePrice.value),changePhoto.value,changeLink.value);
    this.booksService.edit(editBook)
    .subscribe((resp:Respuesta) => 
    {
      if (!resp.error)
      {
        this.toastr.success("Libro editado correctamente", "",
                            {timeOut:2000, positionClass:'toast-top-center'});
         
      }else
      this.toastr.error('El libro ya existe',"",
                        {timeOut:2000, positionClass:'toast-top-center'})
    })
  }
}
