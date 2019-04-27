import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Input,
  OnChanges, OnInit,
  SimpleChange
} from '@angular/core';
import { Observable, Subject, combineLatest } from 'rxjs';
import { startWith} from 'rxjs/operators';
import { API_BASE_URL } from '../../app.tokens';
import {BidMessage, BidService, Product, } from '../../shared/services';
import {Review} from '../../shared/services/product.service';

@Component({
  selector: 'nga-product-detail',
  styleUrls: [ './product-detail.component.scss' ],
  templateUrl: './product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit, OnChanges {
  private readonly productChange$ = new Subject<Product>();
  latestBids$: Observable<number>;
  @Input() product: Product;

  isReviewHidden = true;

  reviews: Review[];
  newRating: number;
  newComment: string;


  constructor(
    @Inject(API_BASE_URL) private readonly baseUrl: string,
    private readonly bidService: BidService,
  ) {
  }

  ngOnInit() {
    this.latestBids$ = combineLatest(
      this.productChange$.pipe(startWith(this.product)),
      this.bidService.priceUpdates$.pipe(startWith<BidMessage|null>(null)),
      (product, bid) =>  bid && bid.productId === product.id ? bid.price : product.price
    );
    this.reviews = [new Review(0, this.product.id, new Date(), 'Shawn Williams',
      5, 'Test Comment')];
  }

  ngOnChanges({ product }: { product: SimpleChange }) {
    this.productChange$.next(product.currentValue);
  }

  placeBid(price: number) {
    this.bidService.placeBid(this.product.id, price);
  }

  urlFor(product: Product): string {
    return `${this.baseUrl}/${product.imageUrl}`;
  }

  addReview() {
    const review = new Review(0, this.product.id, new Date(), 'Anonymous',
      this.newRating, this.newComment);
    console.log('Adding review ' + JSON.stringify(review));
    this.reviews = [ ...this.reviews, review ];
    this.product.rating = this.averageRating(this.reviews);
    this.resetForm();
  }

  averageRating(reviews: Review[]) {
    const sum = reviews.reduce((average, review) => average + review.rating, 0);
    return sum / reviews.length;
  }


  resetForm() {
    this.newRating = 0;
    this.newComment = '';
    this.isReviewHidden = true;
  }
}
