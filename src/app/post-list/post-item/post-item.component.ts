import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post-item.model';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.sass']
})
export class PostItemComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
    console.log('this.post', this.post);
  }

  postLike() {
    this.post.loveIts += 1;    
  }

  postDislike() {
    this.post.loveIts -= 1;    
  }

}
