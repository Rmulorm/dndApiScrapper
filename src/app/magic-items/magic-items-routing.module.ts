import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MagicItemDetailComponent } from "./magic-item-detail/magic-item-detail.component";
import { MagicItemsListComponent } from "./magic-items-list/magic-items-list.component";

const routes: Routes = [
  { path: "magic-items", component: MagicItemsListComponent },
  { path: "magic-items/:id", component: MagicItemDetailComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagicItemsRoutingModule {}
