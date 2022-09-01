import { Component, OnInit } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Spell } from "../types/dnd-api-types";

interface SpellForList extends Spell {
  schoolIcon: string;
}

type Response = {
  spells: Spell[];
};

@Component({
  selector: "app-spells-list",
  templateUrl: "./spells-list.component.html",
  styleUrls: ["./spells-list.component.scss"],
})
export class SpellsListComponent implements OnInit {
  spells: SpellForList[] = [];
  loading = true;
  error: any;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql<Response, any>`
          query GetSpells {
            spells {
              index
              name
              level
              school {
                index
                name
              }
            }
          }
        `,
      })
      .valueChanges.subscribe((result) => {
        this.loading = result.loading;
        this.error = result.error;
        result?.data?.spells.forEach((spell) => {
          this.spells.push({
            ...spell,
            schoolIcon: this.getSchoolIcon(spell.school.index),
          });
        });
      });
  }

  private getSchoolIcon(schoolName: string): string {
    return `${schoolName}-icon-svg`;
  }
}
