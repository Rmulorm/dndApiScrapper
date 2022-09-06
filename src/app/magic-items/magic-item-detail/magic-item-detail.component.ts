import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { switchMap } from "rxjs";
import { MagicItemService } from "../magic-item.service";
import { MagicItem } from "../magic-items-types";

@Component({
  selector: "app-magic-item-detail",
  templateUrl: "./magic-item-detail.component.html",
  styleUrls: ["./magic-item-detail.component.scss"],
})
export class MagicItemDetailComponent implements OnInit {
  magicItem: MagicItem;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: MagicItemService
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.service.getMagicItem(params.get("id")!)
        )
      )
      .subscribe((apiMagicItem) => {
        this.magicItem = {
          ...apiMagicItem,
          category: this.getItemCategory(apiMagicItem.desc),
          description: this.getItemDescription(apiMagicItem.desc),
        };
      });
  }

  private getItemCategory(desc: string[]): string {
    return desc[0];
  }

  private getItemDescription(desc: string[]): string[] {
    return desc.slice(1, desc.length);
  }
}
