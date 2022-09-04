import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SpellsListComponent } from "./spells-list/spells-list.component";
import { SpellDetailComponent } from "./spell-detail/spell-detail.component";

const spellsRoutes: Routes = [
  { path: "spells", component: SpellsListComponent },
  { path: "spells/:id", component: SpellDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(spellsRoutes)],
  exports: [RouterModule],
})
export class SpellsRoutingModule {}
