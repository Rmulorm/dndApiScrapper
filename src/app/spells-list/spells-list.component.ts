import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatIconRegistry } from '@angular/material/icon';
import { Apollo, gql } from 'apollo-angular';
import {
  ABJURATION_ICON,
  CONJURATION_ICON,
  DIVINATION_ICON,
  ENCHANTMENT_ICON,
  EVOCATION_ICON,
  ILUSION_ICON,
  NECROMANCY_ICON,
  TRANSMUTATION_ICON,
} from '../assets/magic-schools-icons';

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
  selector: 'app-spells-list',
  templateUrl: './spells-list.component.html',
  styleUrls: ['./spells-list.component.scss'],
})
export class SpellsListComponent implements OnInit {
  spells: Spell[] = [];
  loading = true;
  error: any;

  constructor(
    private apollo: Apollo,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral(
      'abjuration-icon-svg',
      sanitizer.bypassSecurityTrustHtml(ABJURATION_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'conjuration-icon-svg',
      sanitizer.bypassSecurityTrustHtml(CONJURATION_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'divination-icon-svg',
      sanitizer.bypassSecurityTrustHtml(DIVINATION_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'enchantment-icon-svg',
      sanitizer.bypassSecurityTrustHtml(ENCHANTMENT_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'evocation-icon-svg',
      sanitizer.bypassSecurityTrustHtml(EVOCATION_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'ilusion-icon-svg',
      sanitizer.bypassSecurityTrustHtml(ILUSION_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'necromancy-icon-svg',
      sanitizer.bypassSecurityTrustHtml(NECROMANCY_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      'transmutation-icon-svg',
      sanitizer.bypassSecurityTrustHtml(TRANSMUTATION_ICON)
    );
  }

  ngOnInit() {
    this.apollo
      .watchQuery({
        query: gql<Response, any>`query GetSpells {
          spells {
            index
            name
            level
            school {
              index
              name
            }
          }
        }`,
      })
      .valueChanges.subscribe((result) => {
        this.spells = result?.data?.spells;
        this.loading = result.loading;
        this.error = result.error;
        this.spells.forEach((spell) => {
          spell.schoolIcon = this.getSchoolIcon(spell.school.name);
        });
      });
  }

  private getSchoolIcon(schoolName: string): string {
    return `${schoolName}-icon-svg`;
  }
}
