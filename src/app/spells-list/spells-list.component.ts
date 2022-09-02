import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ApolloQueryResult } from "@apollo/client/core";
import { Apollo, gql, QueryRef } from "apollo-angular";
import {
  FilterDialogInput,
  FilterDialogOutput,
  openEditCourseDialog,
  PossibleValue,
} from "../filter-dialog/filter-dialog.component";
import { MagicSchool, Spell as ApiSpell } from "../types/dnd-api-types";

interface Spell extends ApiSpell {
  schoolIcon: string;
  spellCategory: string;
}

interface SpellsQueryVariables {
  school: string | null;
  level: number | null;
}

interface SpellsQueryResponse {
  spells: ApiSpell[];
}

const spellsQuery = gql<SpellsQueryResponse, SpellsQueryVariables>`
  query SpellsQuery($school: StringFilter, $level: IntFilter) {
    spells(school: $school, level: $level) {
      index
      name
      school {
        index
        name
      }
      level
    }
  }
`;

interface SchoolQueryResponse {
  magicSchools: MagicSchool[];
}

const schoolQuery = gql<SchoolQueryResponse, any>`
  query SchoolsQuery {
    magicSchools {
      index
      name
    }
  }
`;
@Component({
  selector: "app-spells-list",
  templateUrl: "./spells-list.component.html",
  styleUrls: ["./spells-list.component.scss"],
})
export class SpellsListComponent implements OnInit {
  spells: Spell[] = [];
  loading = true;
  error: any;

  spellsQuery: QueryRef<SpellsQueryResponse, SpellsQueryVariables>;
  spellsQueryVariables: SpellsQueryVariables = {
    school: null,
    level: null,
  };

  magicSchools: MagicSchool[];

  constructor(private apollo: Apollo, public dialog: MatDialog) {}

  ngOnInit() {
    this.spellsQuery = this.apollo.watchQuery({
      query: spellsQuery,
    });

    this.spellsQuery.valueChanges.subscribe((result) => {
      this.updateSpellList(result);
    });
  }

  onFilterClick(): void {
    if (!this.magicSchools) {
      this.apollo
        .watchQuery({ query: schoolQuery })
        .valueChanges.subscribe((result) => {
          this.magicSchools = result?.data?.magicSchools;
        });
    }

    const dialogFilterInput = {
      schoolFilter: {
        property: "School",
        possibleValues: this.magicSchools.map(
          (school) =>
            ({ value: school.index, name: school.name } as PossibleValue)
        ),
        selectedValue: this.spellsQueryVariables.school,
      },
      spellLevelFilter: {
        property: "Spell Level",
        possibleValues: Array.from(Array(10).keys()).map(
          (num) =>
            ({
              value: num.toString(10),
              name: num.toString(10),
            } as PossibleValue)
        ),
        selectedValue: this.spellsQueryVariables.level?.toString(),
      },
    } as FilterDialogInput;

    openEditCourseDialog(this.dialog, dialogFilterInput).subscribe(
      async (result) => {
        if (result) {
          this.spellsQueryVariables = {
            school: result?.schoolFilter,
            level: result?.spellLevelFilter,
          } as SpellsQueryVariables;
          const response = await this.spellsQuery.refetch(
            this.spellsQueryVariables
          );
          // this.updateSpellList(response);
        }
      }
    );
  }

  private updateSpellList(
    result: ApolloQueryResult<SpellsQueryResponse>,
    isFreshQuery: boolean = true
  ): void {
    this.loading = result.loading;
    this.error = result.error;
    const spells = result?.data?.spells.map(
      (spell) =>
        ({
          ...spell,
          schoolIcon: this.getSchoolIcon(spell.school.index),
          spellCategory: this.getSpellCategory(spell.level, spell.school.name),
        } as Spell)
    );
    if (isFreshQuery) {
      this.spells = spells;
    } else {
      this.spells.push(...spells);
    }
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
