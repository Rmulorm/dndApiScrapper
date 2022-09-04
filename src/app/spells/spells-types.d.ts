import { Spell as ApiSpell } from "../types/dnd-api-types";

export interface Spell extends ApiSpell {
  spellCategory: string;
  schoolIcon?: string;
  rangeAreaText?: string;
  componentsText?: string;
  durationText?: string;
  attackSaveText?: string;
  classesNames?: string;
}
