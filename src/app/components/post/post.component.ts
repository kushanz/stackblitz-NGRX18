import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { getPostState } from './state/post.selectors';
import { Appstate } from './../../../app/app-store/app.state';
import { PostInterface } from './state/post.model';
import { deletePost } from './state/post.actions';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrl: './post.component.css'
})
export class PostComponent implements OnInit {
  public posts$!: Observable<any>;
  constructor(private store: Store<Appstate>) {}

  ngOnInit() {
    this.posts$ = this.store.select(getPostState);
  }
  deletePost(post:any) {
    console.log(post);
    this.store.dispatch(deletePost(post));
  }
}
