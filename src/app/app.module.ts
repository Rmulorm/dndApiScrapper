import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "../material.module";
import { GraphQLModule } from "../graphql.module";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { CategoriesListComponent } from "./categories-list/categories-list.component";
import { FilterDialogComponent } from "./filter-dialog/filter-dialog.component";
import { SpellsModule } from "./spells/spells.module";
import { MagicItemsModule } from "./magic-items/magic-items.module";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FilterDialogComponent,
    CategoriesListComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatNativeDateModule,
    MaterialModule,
    ReactiveFormsModule,
    SpellsModule,
    GraphQLModule,
    MagicItemsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
