import { Component, OnInit } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { Spell as ApiSpell } from "../types/dnd-api-types";

interface Spell extends ApiSpell {
  schoolIcon: string;
  spellCategory: string;
}

type Response = {
  spells: ApiSpell[];
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
            spellCategory: this.getSpellCategory(
              spell.level,
              spell.school.name
            ),
          });
        });
      });
  }

  private getSchoolIcon(schoolName: string): string {
    return `${schoolName}-icon-svg`;
  }

  private getSpellCategory(level: number, spellSchool: string): string {
    return `${this.getLevelWithEnumerator(level)} level ${spellSchool}`;
  }

  private getLevelWithEnumerator(level: number): string {
    if (level === 1) return `${level}st`;
    if (level === 2) return `${level}nd`;
    return `${level}rd`;
  }
}
