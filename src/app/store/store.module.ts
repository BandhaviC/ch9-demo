import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { ModelModule } from "../model/model.module";
import { StoreComponent } from "./store.component";
import { CartSummaryComponent } from "./cartSummary.component";
import { CartDetailComponent } from "./cartDetail.component";
import { CheckoutComponent } from "./checkout.component";
import { RouterModule } from "@angular/router";
import { FilterPipe } from "../pipe/filter.pipe";

@NgModule({
  imports: [ModelModule, BrowserModule, FormsModule, RouterModule],
  declarations: [
    StoreComponent,
    CartSummaryComponent,
    CartDetailComponent,
    CheckoutComponent,
    FilterPipe,
  ],
  exports: [StoreComponent, CartDetailComponent, CheckoutComponent],
})
export class StoreModule {}
