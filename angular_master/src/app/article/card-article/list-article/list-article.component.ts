import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-list-article',
  templateUrl: './list-article.component.html',
  styleUrls: ['./list-article.component.css']
})
export class ListArticleComponent implements OnInit {
  @Input() post:any;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  editArticle(editData: any){
    this.router.navigate(['/edit-article', editData.id])
  }

}
