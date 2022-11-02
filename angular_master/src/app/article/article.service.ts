import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Post } from './article.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  posts:any;
  newPost: any;

  constructor(private http: HttpClient) { }

  getPosts(){
    // let headers = new HttpHeaders().set('Authorization', 'auth-token');
    return this.http.get(this.ROOT_URL + '/posts')
  }

  addPost(bebas: {title: string, body: string}): Observable<Post>{
    const inputData = this.ROOT_URL + '/posts';
    const data = JSON.stringify(bebas);
    const headers = new HttpHeaders().set('contentType', ['application/json', 'charset=UTF']);
    return this.http.post<Post>(encodeURI(inputData), data, {headers});
  }

  updateArticle(id: any, bebas: {title: string, body: string}): Observable<Post>{
    const inputData = this.ROOT_URL + '/posts' + id;
    const data = JSON.stringify(bebas);
    const headers = new HttpHeaders().set('contentType', ['application/json', 'charset=UTF']);
    return this.http.post<Post>(encodeURI(inputData), data, {headers});
  }

  getItem(id: any){
    this.posts.map(
      ( value: any) => {
        if(value.id == id){
          
          console.log(value);
        }
      }
    )
  }
}
