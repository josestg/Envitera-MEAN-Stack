import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { DevComponent } from './commponents/dev/dev.component';

const httpOptions={
  header:new HttpHeaders({'Content-Type':'application/json'})
}
const apiUrl = "http://localhost:3000/api/posts";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private _http:HttpClient) { }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
  
      console.error(error); // log to console instead
      return of(result as T);
    };
  }

  getPosts () {
    return this._http.get<any>(apiUrl)
      .pipe(
        tap(heroes => console.log('fetched Posts')),
        catchError(this.handleError('getPosts', []))
      );
  }
  
  getPost(id: number): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this._http.get<any>(url).pipe(
      tap(_ => console.log(`fetched Post id=${id}`)),
      catchError(this.handleError<any>(`getPost id=${id}`))
    );
  }
  
  addPost (Post): Observable<any> {
    return this._http.post<any>(apiUrl, Post, httpOptions).pipe(
      tap((Post) => console.log(`added Post w/ id=${Post.id}`)),
      catchError(this.handleError<any>('addPost'))
    );
  }
  
  updatePost (id, Post): Observable<any> {
    const url = `${apiUrl}/${id}`;
    return this._http.put(url, Post, httpOptions).pipe(
      tap(_ => console.log(`updated Post id=${id}`)),
      catchError(this.handleError<any>('updatePost'))
    );
  }
  
  deletePost (id): Observable<any> {
    const url = `${apiUrl}/${id}`;
  
    return this._http.delete<any>(url, httpOptions).pipe(
      tap(_ => console.log(`deleted Post id=${id}`)),
      catchError(this.handleError<any>('deletePost'))
    );
  }

}
