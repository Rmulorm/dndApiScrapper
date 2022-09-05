import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import {
  DND_SPELL_ICON,
  DND_MAGIC_ITEMS_ICON,
} from "./assets/categories-icons";
import { DND_LOGO_ICON } from "./assets/core-icons";
import {
  ABJURATION_ICON,
  CONJURATION_ICON,
  DIVINATION_ICON,
  ENCHANTMENT_ICON,
  EVOCATION_ICON,
  ILLUSION_ICON,
  NECROMANCY_ICON,
  TRANSMUTATION_ICON,
} from "./assets/magic-schools-icons";

export default class CustomIconManager {
  public static setCustomIcons(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ): void {
    this.setCoreIcons(iconRegistry, sanitizer);
    this.setCategoriesIcons(iconRegistry, sanitizer);
    this.setSpellSchoolsIcons(iconRegistry, sanitizer);
  }

  private static setCoreIcons(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral(
      "dnd-logo-svg",
      sanitizer.bypassSecurityTrustHtml(DND_LOGO_ICON)
    );
  }

  private static setCategoriesIcons(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral(
      "dnd-magic-items-svg",
      sanitizer.bypassSecurityTrustHtml(DND_MAGIC_ITEMS_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      "dnd-spells-svg",
      sanitizer.bypassSecurityTrustHtml(DND_SPELL_ICON)
    );
  }

  private static setSpellSchoolsIcons(
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer
  ) {
    iconRegistry.addSvgIconLiteral(
      "abjuration-icon-svg",
      sanitizer.bypassSecurityTrustHtml(ABJURATION_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      "conjuration-icon-svg",
      sanitizer.bypassSecurityTrustHtml(CONJURATION_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      "divination-icon-svg",
      sanitizer.bypassSecurityTrustHtml(DIVINATION_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      "enchantment-icon-svg",
      sanitizer.bypassSecurityTrustHtml(ENCHANTMENT_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      "evocation-icon-svg",
      sanitizer.bypassSecurityTrustHtml(EVOCATION_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      "illusion-icon-svg",
      sanitizer.bypassSecurityTrustHtml(ILLUSION_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      "necromancy-icon-svg",
      sanitizer.bypassSecurityTrustHtml(NECROMANCY_ICON)
    );
    iconRegistry.addSvgIconLiteral(
      "transmutation-icon-svg",
      sanitizer.bypassSecurityTrustHtml(TRANSMUTATION_ICON)
    );
  }
}
