import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "../../material.module";

import { MagicItemsRoutingModule } from "./magic-items-routing.module";
import { MagicItemsListComponent } from "./magic-items-list/magic-items-list.component";
import { MagicItemCardComponent } from "./magic-item-card/magic-item-card.component";

@NgModule({
  imports: [CommonModule, FormsModule, MagicItemsRoutingModule, MaterialModule],
  declarations: [MagicItemsListComponent, MagicItemCardComponent],
})
export class MagicItemsModule {}
