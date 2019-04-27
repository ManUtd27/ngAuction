import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'nga-stars',
  templateUrl: './stars.component.html',
  styleUrls: ['./stars.component.css']
})
export class StarsComponent {
  private _rating: number;
  @Input() readonly = true;

  @Input() get rating(): number {
    return this._rating;
  }

  set rating(value: number) {
    this._rating = value || 0;
  }

  @Output() ratingChange: EventEmitter<number> = new EventEmitter();

  fillStarsWithColor(index: number) {

    if (!this.readonly) {
      this.rating = index + 1;
      this.ratingChange.emit(this.rating);
    }
  }

}
