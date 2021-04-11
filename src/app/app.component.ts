import { Component } from '@angular/core';
import { Post } from './models/post-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  postArr: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam rerum repellat repudiandae modi adipisci, eum beatae vitae quis quod ratione placeat tenetur dolor suscipit tempora inventore eligendi corrupti ipsa harum.',
      loveIts: 0,
      created_at: new Date(),
    },
    {
      title: 'Mon second post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam rerum repellat repudiandae modi adipisci, eum beatae vitae quis quod ratione placeat tenetur dolor suscipit tempora inventore eligendi corrupti ipsa harum.',
      loveIts: 0,
      created_at: new Date(),
    },
    {
      title: 'Un autre post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam rerum repellat repudiandae modi adipisci, eum beatae vitae quis quod ratione placeat tenetur dolor suscipit tempora inventore eligendi corrupti ipsa harum.',
      loveIts: 0,
      created_at: new Date(),
    },
    {
      title: 'Mon dernier post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Quisquam rerum repellat repudiandae modi adipisci, eum beatae vitae quis quod ratione placeat tenetur dolor suscipit tempora inventore eligendi corrupti ipsa harum.',
      loveIts: 0,
      created_at: new Date(),
    },
  ]
}
