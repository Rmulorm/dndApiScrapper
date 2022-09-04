import { Component, Input, OnInit } from "@angular/core";
import { Spell } from "../spells-list/spells-list.component";

@Component({
  selector: "app-spell-card",
  templateUrl: "./spell-card.component.html",
  styleUrls: ["./spell-card.component.scss"],
})
export class SpellCardComponent implements OnInit {
  @Input()
  spell: Spell;

  constructor() {}

  ngOnInit(): void {}
}
