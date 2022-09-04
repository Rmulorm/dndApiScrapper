import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap, Router } from "@angular/router";
import { switchMap } from "rxjs/operators";
import {
  AreaOfEffect,
  Class,
  Maybe,
  Spell as ApiSpell,
  SpellAttackType,
  SpellComponent,
  SpellDc,
} from "src/app/types/dnd-api-types";
import { SpellsService } from "../spell.service";
import { SpellsUtils } from "../SpellUtils";

interface Spell extends ApiSpell {
  spellCategory?: string;
  rangeAreaText?: string;
  componentsText?: string;
  durationText?: string;
  attackSaveText?: string;
  classesNames?: string;
}

@Component({
  selector: "app-spell-detail",
  templateUrl: "./spell-detail.component.html",
  styleUrls: ["./spell-detail.component.scss"],
})
export class SpellDetailComponent implements OnInit {
  spell: Spell;
  loading = true;
  error = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: SpellsService
  ) {}

  ngOnInit(): void {
    this.route.paramMap;
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.service.getSpell(params.get("id")!)
        )
      )
      .subscribe((apiSpell) => {
        this.spell = {
          ...apiSpell,
          spellCategory: SpellsUtils.getSpellCategory(
            apiSpell.level,
            apiSpell.school.name
          ),
          rangeAreaText: this.createRangeAreaText(
            apiSpell.range,
            apiSpell.area_of_effect
          ),
          componentsText: this.createComponentsText(
            apiSpell.components,
            apiSpell.material
          ),
          durationText: this.createDurationText(
            apiSpell.duration,
            apiSpell.concentration
          ),
          attackSaveText: this.createAttackSaveText(
            apiSpell.attack_type,
            apiSpell.dc
          ),
          classesNames: this.createClassesNames(apiSpell.classes),
        };
      });
  }

  private createRangeAreaText(
    range: string,
    area_of_effect: Maybe<AreaOfEffect> | undefined
  ): string | undefined {
    if (area_of_effect) {
      return `${range} / ${area_of_effect.size} - ${area_of_effect.type}`;
    }
    return `${range}`;
  }

  private createComponentsText(
    components: Maybe<Maybe<SpellComponent>[]> | undefined,
    material: Maybe<string> | undefined
  ): string | undefined {
    if (components && components.includes(SpellComponent.M)) {
      return `${components} (${material})`;
    }
    return `${components}`;
  }

  private createDurationText(
    duration: string,
    isConcentration: boolean
  ): string {
    if (isConcentration) {
      return `Concentration, ${duration.toLowerCase()}`;
    }
    return `${duration}`;
  }

  private createAttackSaveText(
    attack_type: Maybe<SpellAttackType> | undefined,
    dc: Maybe<SpellDc> | undefined
  ): string {
    if (attack_type) {
      return `${attack_type}`;
    }
    if (dc) {
      return `${dc.type.name}`;
    }
    return "";
  }

  private createClassesNames(classes: Class[]): string {
    return classes.map((dndClass) => dndClass.name).join(", ");
  }
}
