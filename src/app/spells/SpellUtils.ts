export class SpellsUtils {
  private constructor() {}

  public static getSpellCategory(level: number, spellSchool: string): string {
    return `${this.getLevelWithEnumerator(level)} Level ${spellSchool}`;
  }

  private static getLevelWithEnumerator(level: number): string {
    if (level === 1) return `${level}st`;
    if (level === 2) return `${level}nd`;
    return `${level}rd`;
  }
}
