import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "../../material.module";

import { SpellsListComponent } from "./spells-list/spells-list.component";
import { SpellDetailComponent } from "./spell-detail/spell-detail.component";

import { SpellsRoutingModule } from "./spells-routing.module";
import { SpellCardComponent } from "./spell-card/spell-card.component";

@NgModule({
  imports: [CommonModule, FormsModule, SpellsRoutingModule, MaterialModule],
  declarations: [SpellsListComponent, SpellDetailComponent, SpellCardComponent],
})
export class SpellsModule {}
