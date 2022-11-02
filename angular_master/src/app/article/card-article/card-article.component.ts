import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';
import { ArticleService } from '../article.service';
import { Post } from '../article.model';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-card-article',
  templateUrl: './card-article.component.html',
  styleUrls: ['./card-article.component.css']
})
export class CardArticleComponent implements OnInit {
  newPost:any = [];
    
  readonly ROOT_URL = 'https://jsonplaceholder.typicode.com';
  displayPost: any;

  constructor(private http: HttpClient, private article: ArticleService, private router: Router) { }

  ngOnInit() {
    this.article.getPosts().subscribe((data:any) => {
      this.newPost = data
      // data.map(
      //   (post:any)=>{
      //     this.newPost.push(post);
      //     // console.log(this.newPost);     
      //   }
      // )
      console.log(this.newPost);  
    })
  }

  editArticle(editData: any){
    this.router.navigate(['/edit-article', editData.id])
  }

  // createPost(){
  //   const datum: Post = {
  //     id: null,
  //     userId: 203,
  //     title: 'Dinda Kalista',
  //     body: ' Hello world'
  //   }
  //   this.displayPost = this.http.post(this.ROOT_URL + '/posts?id=101', datum)
  //   console.log(this.displayPost);
    
  // }
  



  // getPosts(){
  //   let headers = new HttpHeaders().set('Authorization', 'auth-token');
  //   this.posts = this.http.get(this.ROOT_URL + '/posts?id=1', {headers})
  // }

}


