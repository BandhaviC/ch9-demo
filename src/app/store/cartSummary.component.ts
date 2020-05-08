import { Component } from "@angular/core";
import { Cart } from "../model/cart.model";
import { Subject } from "rxjs";
@Component({
  selector: "cart-summary",
  templateUrl: "cartSummary.component.html",
})
export class CartSummaryComponent {
  // the cart is injected by Angular
  constructor(public cart: Cart) {}
}
export class AppComponent {
  items: Array<string>;
  term$ = new Subject<string>();
  service: any;

  search(term: string) {
    this.service.search(term).subscribe((results) => (this.items = results));
  }
}
