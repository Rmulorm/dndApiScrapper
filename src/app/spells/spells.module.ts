import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

import { MaterialModule } from "../../material.module";

import { SpellsListComponent } from "./spells-list/spells-list.component";
import { SpellDetailComponent } from "./spell-detail/spell-detail.component";

import { SpellsRoutingModule } from "./spells-routing.module";

@NgModule({
  imports: [CommonModule, FormsModule, SpellsRoutingModule, MaterialModule],
  declarations: [SpellsListComponent, SpellDetailComponent],
})
export class SpellsModule {}
