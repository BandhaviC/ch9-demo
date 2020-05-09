import { Component } from "@angular/core";

@Component({
  selector: "app",
  template: "<router-outlet></router-outlet>",
})
export class AppComponent {
  name = "Angular";
  product = [
    "Kayak",
    "Lifejacket",
    "Soccer Ball",
    "Corner Flags",
    "Stadium",
    "Thinking Cap",
    "Unsteady Chair",
    "Human Chess Board",
    "Bling Bling King",
  ];
}
