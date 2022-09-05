import { Component, Input, OnInit } from "@angular/core";
import { MagicItem } from "../magic-items-types";

@Component({
  selector: "app-magic-item-card",
  templateUrl: "./magic-item-card.component.html",
  styleUrls: ["./magic-item-card.component.scss"],
})
export class MagicItemCardComponent implements OnInit {
  @Input()
  magicItem: MagicItem;
  constructor() {}

  ngOnInit(): void {}
}
