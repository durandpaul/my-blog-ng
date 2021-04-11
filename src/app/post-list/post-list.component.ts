import { Component, Input, OnInit } from '@angular/core';
import { Post } from '../models/post-item.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {

  @Input() postsList: Post[];

  constructor() { }

  ngOnInit(): void {
    // console.log('postsList', this.postsList); 
  }


}
