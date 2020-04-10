import { Component, Input } from '@angular/core';

@Component({
  selector: 'like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css'],
  styles: [`
    span, .glyphicon {color: #ccc; font-size: 20px; padding: 10px;}
    .isActive {color: deeppink;}
  `]
})
export class LikeComponent {
@Input() likesCount: number;
@Input() isLiked: boolean;

onHeartClick(){
  this.likesCount += this.isLiked ? -1 : 1;
  this.isLiked = !this.isLiked 
}
}

