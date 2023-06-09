import { Injectable } from '@angular/core';
import { Book } from 'src/app/models/book';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private books : Book[]; 
  private url = "http://localhost:3000/books";
  constructor(private http: HttpClient) {
  }
  //METODOS
  // public getAll():Book[]  {    
  //   return this.books;
  // }
  public getLibros(){
    return this.http.get(this.url)
  }
  public add(newBook: Book){
    return this.http.post(this.url,newBook)
  }
  public edit(changeBook:Book){
    return this.http.put(this.url,changeBook)
  }
  public del(id_book:number){
    const url = `${this.url}/${id_book}`
    return this.http.delete(url)
  }

  public getOne(id_book:number): Observable<Object>{
    const url = `${this.url}/${id_book}`
    return this.http.get<Book>(url)
  }
}