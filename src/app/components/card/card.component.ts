import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  standalone: false
})
export class CardComponent {
  @Input() post: any;

  liked: boolean = false;
  showCommentInput: boolean = false;
  newComment: string = '';
  comments: string[] = [];

  isliked() {
    this.liked = !this.liked;
  }

  toggleCommentInput() {
    this.showCommentInput = !this.showCommentInput;
  }

  addComment() {
    const trimmed = this.newComment.trim();
    if (trimmed) {
      this.comments.push(trimmed);
      this.newComment = '';
      this.showCommentInput = false;
    }
  }

  deleteComment(index: number) {
    this.comments.splice(index, 1);
  }
}
