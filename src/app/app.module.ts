import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { MaterialModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatNativeDateModule } from "@angular/material/core";
import { HttpClientModule } from "@angular/common/http";
import { GraphQLModule } from "../graphql.module";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { SpellsListComponent } from "./spell/spells-list/spells-list.component";
import { CategoriesListComponent } from "./categories-list/categories-list.component";
import { FilterDialogComponent } from "./filter-dialog/filter-dialog.component";

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SpellsListComponent,
    CategoriesListComponent,
    FilterDialogComponent,
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
    GraphQLModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
