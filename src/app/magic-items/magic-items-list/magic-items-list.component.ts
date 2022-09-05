import { AfterViewInit, Component, HostListener, OnInit } from "@angular/core";
import { MagicItemRarity } from "src/app/types/dnd-api-types";
import { MagicItem } from "../magic-items-types";

const MINIMUM_COLUMN_WIDTH = 400;

@Component({
  selector: "app-magic-items-list",
  templateUrl: "./magic-items-list.component.html",
  styleUrls: ["./magic-items-list.component.scss"],
})
export class MagicItemsListComponent implements OnInit, AfterViewInit {
  magicItemList: MagicItem[] = [];

  gridColumns: number;
  constructor() {}

  ngOnInit(): void {
    this.magicItemList = [
      {
        index: "",
        name: "Item 1",
        rarity: MagicItemRarity.Rare,
        equipment_category: {
          index: "weapon",
          name: "Weapon",
        },
      } as MagicItem,
      {
        index: "",
        name: "Item 2",
        rarity: MagicItemRarity.Uncommon,
        equipment_category: {
          index: "armor",
          name: "Armor",
        },
      } as MagicItem,
      {
        index: "",
        name: "Item 3",
        rarity: MagicItemRarity.Legendary,
        equipment_category: {
          index: "potion",
          name: "Potion",
        },
      } as MagicItem,
    ];
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

  @HostListener("window:resize")
  onResize() {
    this.gridColumns =
      window.innerWidth >= 2 * MINIMUM_COLUMN_WIDTH
        ? Math.floor(window.innerWidth / MINIMUM_COLUMN_WIDTH)
        : 1;
  }
}
