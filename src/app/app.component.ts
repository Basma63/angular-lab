import { Component } from '@angular/core';
import { post } from './models/card.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ang-day1';
  posts: post[] = [{
    username: 'John Doe',
    profileImage: 'https://i.pinimg.com/736x/cf/d4/13/cfd413c84851920d5dbc820610176e41.jpg',
    postImage: 'https://i.pinimg.com/736x/36/6c/86/366c86152a4cda9fc7ccda4844a647f8.jpg',
    content: 'what a beatifull house',
    time: '1 hour ago'
  },
  {
    username: 'Sarah Smith',
    profileImage: 'https://i.pinimg.com/736x/45/d6/52/45d652161607a6a6ef21fbdf1630eba7.jpg',
    postImage: 'https://i.pinimg.com/736x/07/dd/a4/07dda44befa043a3594601a9cfd330c9.jpg',
    content: 'what a beatifull house',
    time: '3 hours ago'
  },
  {
    username: 'Mike Ross',
    postImage: 'https://i.pinimg.com/736x/3d/cf/c8/3dcfc8d2eb35a4a0ab360e70f9661285.jpg',
    profileImage: 'https://i.pinimg.com/736x/67/ee/a3/67eea3e8aa7997ccc6f136d87dd6edf9.jpg',
    content: 'what a beatifull house',
    time: 'Yesterday'
  }, {
    username: 'david Ross',
    postImage: 'https://i.pinimg.com/736x/37/6e/48/376e485d88faf725c3b9fec5588f33d2.jpg',
    profileImage: 'https://i.pinimg.com/736x/8d/95/03/8d9503a77e4c21ebf0ced6c252819a0e.jpg',
    content: 'what a beatifull house',
    time: 'Yesterday'
  }
  ];

};


