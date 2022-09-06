import { Component, OnInit } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { MatIconRegistry } from "@angular/material/icon";
import CustomIconManager from "../custom-icon-manager";
import { Location } from "@angular/common";
import { Router, RouterEvent } from "@angular/router";
import { filter } from "rxjs";

@Component({
  selector: "app-top-bar",
  templateUrl: "./top-bar.component.html",
  styleUrls: ["./top-bar.component.scss"],
})
export class TopBarComponent implements OnInit {
  isButtonDisabled: boolean;

  constructor(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    router: Router,
    private location: Location
  ) {
    CustomIconManager.setCustomIcons(iconRegistry, sanitizer);
    router.events.subscribe(() => {
      this.isButtonDisabled = this.location.isCurrentPathEqualTo("");
    });
  }

  ngOnInit(): void {}

  backButton() {
    this.location.back();
  }

  dndButtonClick() {
    window.location.href = "https://dnd.wizards.com/";
  }
}
