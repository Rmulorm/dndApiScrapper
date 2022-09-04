import { AfterViewInit } from "@angular/core";
import { Component, HostListener, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { ApolloQueryResult } from "@apollo/client/core";
import { Apollo, gql, QueryRef } from "apollo-angular";
import {
  FilterDialogInput,
  FilterDialogOutput,
  openEditCourseDialog,
  PossibleValue,
} from "../../filter-dialog/filter-dialog.component";
import {
  MagicSchool,
  OrderByDirection,
  Spell as ApiSpell,
  SpellOrder,
  SpellOrderBy,
} from "../../types/dnd-api-types";
import { Spell } from "../spells-types";
import { SpellsUtils } from "../SpellUtils";

interface SpellsQueryVariables {
  school: string | null;
  level: number | null;
  order?: SpellOrder;
}

interface SpellsQueryResponse {
  spells: ApiSpell[];
}

const spellsQuery = gql<SpellsQueryResponse, SpellsQueryVariables>`
  query SpellsQuery(
    $school: StringFilter
    $level: IntFilter
    $order: SpellOrder
  ) {
    spells(school: $school, level: $level, order: $order) {
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

const MINIMUM_COLUMN_WIDTH = 400;

@Component({
  selector: "app-spells-list",
  templateUrl: "./spells-list.component.html",
  styleUrls: ["./spells-list.component.scss"],
})
export class SpellsListComponent implements OnInit, AfterViewInit {
  spells: Spell[] = [];
  loading = true;
  error: any;

  gridColumns: number;

  spellsQuery: QueryRef<SpellsQueryResponse, SpellsQueryVariables>;
  spellsQueryVariables: SpellsQueryVariables = {
    school: null,
    level: null,
    order: {
      by: SpellOrderBy.Level,
      direction: OrderByDirection.Ascending,
      then_by: {
        by: SpellOrderBy.School,
        direction: OrderByDirection.Ascending,
        then_by: {
          by: SpellOrderBy.Name,
          direction: OrderByDirection.Ascending,
        },
      },
    },
  };

  magicSchools: MagicSchool[];

  constructor(private apollo: Apollo, public dialog: MatDialog) {}

  ngOnInit() {
    this.spellsQuery = this.apollo.watchQuery({
      query: spellsQuery,
      variables: this.spellsQueryVariables,
    });

    this.spellsQuery.valueChanges.subscribe((result) => {
      this.updateSpellList(result);
    });

    this.apollo.query({ query: schoolQuery }).subscribe((result) => {
      this.magicSchools = result?.data?.magicSchools;
    });
  }

  ngAfterViewInit(): void {
    this.onResize();
  }

  @HostListener("window:resize")
  onResize() {
    this.gridColumns =
      window.innerWidth >= 2 * MINIMUM_COLUMN_WIDTH
        ? Math.floor(window.innerWidth / MINIMUM_COLUMN_WIDTH)
        : 1;
  }

  onFilterClick(): void {
    if (this.magicSchools) {
      const dialogFilterInput = this.createDialogFilterInput();

      openEditCourseDialog(this.dialog, dialogFilterInput).subscribe(
        async (result) => await this.filterDialogCloseCallback(result)
      );
    }
  }

  private createDialogFilterInput() {
    return {
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
  }

  private async filterDialogCloseCallback(
    result?: FilterDialogOutput
  ): Promise<void> {
    if (result) {
      this.spellsQueryVariables = {
        school: result?.schoolFilter,
        level: result?.spellLevelFilter,
      } as SpellsQueryVariables;
      await this.spellsQuery.refetch(this.spellsQueryVariables);
    }
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
          spellCategory: SpellsUtils.getSpellCategory(
            spell.level,
            spell.school.name
          ),
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
}
