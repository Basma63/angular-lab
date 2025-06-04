import { Component, Input } from '@angular/core';
import { post } from '../../models/card.models';
@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() post: post = {
  username: '',
  profileImage: '',
  postImage: '',
  content: '',
  time: ''
};

liked :boolean = false;
isliked(){
  this.liked = !this.liked
}

}
