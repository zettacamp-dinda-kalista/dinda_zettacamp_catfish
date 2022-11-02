import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Post } from '../article.model';
import { ArticleService } from '../article.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {
  postId: any;
  id: any;
  postData!: FormGroup;
  bebas!: { title: string; body: string; };
  constructor(private article: ArticleService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    if(this.route.snapshot.params['id']) {
      this.postId = this.route.snapshot.params['id'];
      // console.log(this.id);
    } else{
      this.postId = null;
    }
    this.postData = new FormGroup({
      'id': new FormControl(null),
      'userId': new FormControl(null),
      'title': new FormControl(null),
      'body': new FormControl(null)
    });
  }

  onSubmit(){
    if (this.id){
      this.article.updateArticle(this.id, this.bebas).subscribe((dataId: any) => dataId);
      this.router.navigate(['/article']);
    } else {
      this.article.addPost(this.bebas).subscribe((newPost: any) => newPost);
      this.router.navigate(['/article']);
      
    }   
  }

}
