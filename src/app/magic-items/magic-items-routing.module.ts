import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MagicItemsListComponent } from "./magic-items-list/magic-items-list.component";

const routes: Routes = [
  { path: "magic-items", component: MagicItemsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MagicItemsRoutingModule {}
