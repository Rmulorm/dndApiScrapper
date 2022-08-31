import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CategoriesListComponent } from './categories-list/categories-list.component';
import { SpellsListComponent } from './spells-list/spells-list.component';

const routes: Routes = [
  { path: '', component: CategoriesListComponent },
  { path: 'features', component: SpellsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
