import { Component, OnInit } from "@angular/core";
import { Apollo, gql } from "apollo-angular";

type School = {
  index: string;
  name: string;
};

type Spell = {
  index: string;
  name: string;
  level: string;
  school: School;
  schoolIcon: string;
};

type Response = {
  spells: Spell[];
};

@Component({
  selector: "app-spells-list",
  templateUrl: "./spells-list.component.html",
  styleUrls: ["./spells-list.component.scss"],
})
export class SpellsListComponent implements OnInit {
  spells: Spell[] = [];
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
