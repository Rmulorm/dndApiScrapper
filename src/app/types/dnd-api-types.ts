export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** String or list of strings */
  StringFilter: any;
  /** Int, list of ints, or object with gte (>=), gt (>), lte (<=), and lt (<) properties for range of values */
  IntFilter: any;
  /** Float, list of floats, or object with gte (>=), gt (>), lte (<=), and lt (<) properties for range of values */
  FloatFilter: any;
  /** LanguageScript ("COMMON", "ELVISH", "DWARVISH", "INFERNAL", "DRACONIC", "CELESTIAL") or list of LanguageScripts */
  LanguageScriptFilter: any;
  /** AreaOfEffectType ("SPHERE", "CUBE", "CYLINDER", "LINE", "CONE") or list of AreaOfEffectTypes */
  AreaOfEffectTypeFilter: any;
  /** SpellAttackType ("MELEE", "RANGED") or list of SpellAttackTypes */
  SpellAttackTypeFilter: any;
  /** ProficiencyType ("WEAPONS", "ARTISANS_TOOLS", "SKILLS", "ARMOR", "MUSICAL_INSTRUMENTS", "SAVING_THROWS", "OTHER", "GAMING_SETS", "VEHICLES") or list of ProficiencyTypes */
  ProficiencyTypeFilter: any;
  /** Size ("TINY", "SMALL", "MEDIUM", "LARGE", "HUGE", "GARGANTUAN") or list of sizes */
  SizeFilter: any;
  /** MonsterTypes ("BEAST", "MONSTROSITY", "DRAGON", "HUMANOID", "UNDEAD", "FIEND", "CELESTIAL", "CONSTRUCT", "GIANT", "ELEMENTAL", "FEY", "ABERRATION", "OOZE", "SWARM", "PLANT") or list of MonsterTypes */
  MonsterTypeFilter: any;
  /** MonsterSubtype ("ANY_RACE", "HUMAN", "DWARF", "ELF", "GOBLINOID", "MERFOLK", "SHAPECHANGER", "DEMON", "DEVIL", "ORC", "SAHUAGIN", "TITAN", "KOBOLD", "GNOLL", "GRIMLOCK", "LIZARDFOLK", "GNOME") or list of MonsterSubtypes */
  MonsterSubtypeFilter: any;
  /** Int or string */
  ActionCount: any;
};

export type AbilityScore = {
  __typename?: "AbilityScore";
  index: Scalars["String"];
  name: Scalars["String"];
  full_name: Scalars["String"];
  desc: Array<Scalars["String"]>;
  skills: Array<Skill>;
};

export type AbilityScoreSkillsArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
};

export type Skill = {
  __typename?: "Skill";
  index: Scalars["String"];
  name: Scalars["String"];
  desc: Array<Scalars["String"]>;
  ability_score: AbilityScore;
};

export type Alignment = {
  __typename?: "Alignment";
  index: Scalars["String"];
  name: Scalars["String"];
  abbreviation: Scalars["String"];
  desc: Scalars["String"];
};

export type Condition = {
  __typename?: "Condition";
  index: Scalars["String"];
  name: Scalars["String"];
  desc: Array<Scalars["String"]>;
};

export type DamageType = {
  __typename?: "DamageType";
  index: Scalars["String"];
  name: Scalars["String"];
  desc: Array<Scalars["String"]>;
};

export type WeaponProperty = {
  __typename?: "WeaponProperty";
  index: Scalars["String"];
  name: Scalars["String"];
  desc: Array<Scalars["String"]>;
};

export enum Currency {
  Cp = "CP",
  Sp = "SP",
  Gp = "GP",
}

export type Cost = {
  __typename?: "Cost";
  quantity: Scalars["Int"];
  unit: Currency;
};

export type EquipmentCategory = {
  __typename?: "EquipmentCategory";
  index: Scalars["String"];
  name: Scalars["String"];
  equipment: Array<IEquipmentBase>;
};

export type EquipmentCategoryEquipmentArgs = {
  order?: InputMaybe<EquipmentCategoryOrder>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
};

export type IEquipmentBase = {
  index: Scalars["String"];
  name: Scalars["String"];
  desc?: Maybe<Array<Scalars["String"]>>;
  equipment_category: EquipmentCategory;
};

export enum MagicItemRarity {
  Varies = "VARIES",
  Uncommon = "UNCOMMON",
  Rare = "RARE",
  VeryRare = "VERY_RARE",
  Legendary = "LEGENDARY",
}

export type MagicItem = IEquipmentBase & {
  __typename?: "MagicItem";
  index: Scalars["String"];
  name: Scalars["String"];
  desc: Array<Scalars["String"]>;
  rarity: MagicItemRarity;
  equipment_category: EquipmentCategory;
};

export type IEquipment = {
  index: Scalars["String"];
  name: Scalars["String"];
  cost: Cost;
  desc?: Maybe<Array<Scalars["String"]>>;
  equipment_category: EquipmentCategory;
  weight?: Maybe<Scalars["Float"]>;
};

export type Tool = IEquipment &
  IEquipmentBase & {
    __typename?: "Tool";
    index: Scalars["String"];
    name: Scalars["String"];
    desc?: Maybe<Array<Scalars["String"]>>;
    cost: Cost;
    equipment_category: EquipmentCategory;
    weight?: Maybe<Scalars["Float"]>;
    tool_category: EquipmentCategory;
  };

export type IGear = {
  index: Scalars["String"];
  name: Scalars["String"];
  cost: Cost;
  desc?: Maybe<Array<Scalars["String"]>>;
  equipment_category: EquipmentCategory;
  weight?: Maybe<Scalars["Float"]>;
  gear_category: EquipmentCategory;
};

export type Gear = IGear &
  IEquipment &
  IEquipmentBase & {
    __typename?: "Gear";
    index: Scalars["String"];
    name: Scalars["String"];
    cost: Cost;
    desc?: Maybe<Array<Scalars["String"]>>;
    equipment_category: EquipmentCategory;
    weight?: Maybe<Scalars["Float"]>;
    gear_category: EquipmentCategory;
  };

export type PackQuantity = {
  __typename?: "PackQuantity";
  quantity: Scalars["Int"];
  item: IEquipment;
};

export type Quantity = {
  __typename?: "Quantity";
  quantity: Scalars["Int"];
  equipment: IEquipment;
};

export type Pack = IGear &
  IEquipment &
  IEquipmentBase & {
    __typename?: "Pack";
    index: Scalars["String"];
    name: Scalars["String"];
    cost: Cost;
    desc?: Maybe<Array<Scalars["String"]>>;
    equipment_category: EquipmentCategory;
    weight?: Maybe<Scalars["Float"]>;
    gear_category: EquipmentCategory;
    contents: Array<PackQuantity>;
  };

export type Ammunition = IGear &
  IEquipment &
  IEquipmentBase & {
    __typename?: "Ammunition";
    index: Scalars["String"];
    name: Scalars["String"];
    cost: Cost;
    desc?: Maybe<Array<Scalars["String"]>>;
    equipment_category: EquipmentCategory;
    weight?: Maybe<Scalars["Float"]>;
    gear_category: EquipmentCategory;
    quantity: Scalars["Int"];
  };

export type Damage = {
  __typename?: "Damage";
  damage_dice: Scalars["String"];
  damage_type: DamageType;
};

export type Range = {
  __typename?: "Range";
  normal: Scalars["Int"];
  long?: Maybe<Scalars["Int"]>;
};

export enum WeaponRange {
  Melee = "MELEE",
  Ranged = "RANGED",
}

export type Weapon = IEquipment &
  IEquipmentBase & {
    __typename?: "Weapon";
    index: Scalars["String"];
    name: Scalars["String"];
    cost: Cost;
    desc?: Maybe<Array<Scalars["String"]>>;
    equipment_category: EquipmentCategory;
    weight?: Maybe<Scalars["Float"]>;
    damage?: Maybe<Damage>;
    range: Range;
    throw_range?: Maybe<Range>;
    weapon_category: EquipmentCategory;
    weapon_range: WeaponRange;
    category_range: EquipmentCategory;
    two_handed_damage?: Maybe<Damage>;
    properties: Array<WeaponProperty>;
    special?: Maybe<Array<Scalars["String"]>>;
  };

export type WeaponPropertiesArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type ArmorClass = {
  __typename?: "ArmorClass";
  base: Scalars["Int"];
  dex_bonus: Scalars["Boolean"];
  max_bonus?: Maybe<Scalars["Int"]>;
};

export type Armor = IEquipment &
  IEquipmentBase & {
    __typename?: "Armor";
    index: Scalars["String"];
    name: Scalars["String"];
    cost: Cost;
    desc?: Maybe<Array<Scalars["String"]>>;
    equipment_category: EquipmentCategory;
    weight?: Maybe<Scalars["Float"]>;
    armor_category: EquipmentCategory;
    str_minimum: Scalars["Int"];
    stealth_disadvantage: Scalars["Boolean"];
    armor_class: ArmorClass;
  };

export type Speed = {
  __typename?: "Speed";
  quantity: Scalars["Float"];
  unit: Scalars["String"];
};

export type Vehicle = IEquipment &
  IEquipmentBase & {
    __typename?: "Vehicle";
    index: Scalars["String"];
    name: Scalars["String"];
    cost: Cost;
    desc?: Maybe<Array<Scalars["String"]>>;
    equipment_category: EquipmentCategory;
    weight?: Maybe<Scalars["Float"]>;
    vehicle_category: EquipmentCategory;
    speed?: Maybe<Speed>;
    capacity?: Maybe<Scalars["String"]>;
  };

export type AbilityScorePrerequisite = {
  __typename?: "AbilityScorePrerequisite";
  ability_score: AbilityScore;
  minimum_score: Scalars["Int"];
};

export type Feat = {
  __typename?: "Feat";
  index: Scalars["String"];
  name: Scalars["String"];
  desc: Array<Scalars["String"]>;
  prerequisites: Array<AbilityScorePrerequisite>;
};

export enum LanguageType {
  Standard = "STANDARD",
  Exotic = "EXOTIC",
}

export enum LanguageScript {
  Common = "COMMON",
  Elvish = "ELVISH",
  Dwarvish = "DWARVISH",
  Infernal = "INFERNAL",
  Draconic = "DRACONIC",
  Celestial = "CELESTIAL",
}

export type Language = {
  __typename?: "Language";
  index: Scalars["String"];
  name: Scalars["String"];
  desc?: Maybe<Scalars["String"]>;
  script?: Maybe<LanguageScript>;
  type: LanguageType;
  typical_speakers: Array<Scalars["String"]>;
};

export type Rule = {
  __typename?: "Rule";
  index: Scalars["String"];
  name: Scalars["String"];
  desc: Scalars["String"];
  subsections: Array<RuleSection>;
};

export type RuleSubsectionsArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type RuleSection = {
  __typename?: "RuleSection";
  index: Scalars["String"];
  name: Scalars["String"];
  desc: Scalars["String"];
};

export type AreaOfEffect = {
  __typename?: "AreaOfEffect";
  type: AreaOfEffectType;
  size: Scalars["Int"];
};

export enum AreaOfEffectType {
  Sphere = "SPHERE",
  Cube = "CUBE",
  Cylinder = "CYLINDER",
  Line = "LINE",
  Cone = "CONE",
}

export enum SpellComponent {
  V = "V",
  S = "S",
  M = "M",
}

export type DamageAtLevel = {
  __typename?: "DamageAtLevel";
  level: Scalars["Int"];
  damage: Scalars["String"];
};

export type SpellDamage = {
  __typename?: "SpellDamage";
  damage_at_slot_level?: Maybe<Array<DamageAtLevel>>;
  damage_at_character_level?: Maybe<Array<DamageAtLevel>>;
  damage_type?: Maybe<DamageType>;
};

export type HealingAtLevel = {
  __typename?: "HealingAtLevel";
  level: Scalars["Int"];
  healing: Scalars["String"];
};

export enum DcSuccess {
  None = "NONE",
  Half = "HALF",
  Other = "OTHER",
}

export type SpellDc = {
  __typename?: "SpellDc";
  success: DcSuccess;
  type: AbilityScore;
  desc?: Maybe<Scalars["String"]>;
};

export type MagicSchool = {
  __typename?: "MagicSchool";
  index: Scalars["String"];
  name: Scalars["String"];
  desc: Scalars["String"];
  spells: Array<Spell>;
};

export type MagicSchoolSpellsArgs = {
  level?: InputMaybe<Scalars["IntFilter"]>;
  class?: InputMaybe<Scalars["StringFilter"]>;
  subclass?: InputMaybe<Scalars["StringFilter"]>;
  concentration?: InputMaybe<Scalars["Boolean"]>;
  ritual?: InputMaybe<Scalars["Boolean"]>;
  attack_type?: InputMaybe<Scalars["SpellAttackTypeFilter"]>;
  casting_time?: InputMaybe<Scalars["StringFilter"]>;
  area_of_effect?: InputMaybe<AreaOfEffectFilter>;
  damage_type?: InputMaybe<Scalars["StringFilter"]>;
  dc_type?: InputMaybe<Scalars["StringFilter"]>;
  range?: InputMaybe<Scalars["StringFilter"]>;
  order?: InputMaybe<SpellOrder>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
};

export enum SpellAttackType {
  Melee = "MELEE",
  Ranged = "RANGED",
}

export type Spell = {
  __typename?: "Spell";
  index: Scalars["String"];
  area_of_effect?: Maybe<AreaOfEffect>;
  attack_type?: Maybe<SpellAttackType>;
  casting_time: Scalars["String"];
  classes: Array<Class>;
  subclasses: Array<Subclass>;
  components?: Maybe<Array<Maybe<SpellComponent>>>;
  concentration: Scalars["Boolean"];
  damage?: Maybe<SpellDamage>;
  dc?: Maybe<SpellDc>;
  desc: Array<Scalars["String"]>;
  duration: Scalars["String"];
  heal_at_slot_level?: Maybe<Array<HealingAtLevel>>;
  higher_level?: Maybe<Array<Scalars["String"]>>;
  level: Scalars["Int"];
  material?: Maybe<Scalars["String"]>;
  name: Scalars["String"];
  range: Scalars["String"];
  ritual: Scalars["Boolean"];
  school: MagicSchool;
};

export type SpellClassesArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type SpellSubclassesArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type ProficiencyReference =
  | EquipmentCategory
  | Skill
  | AbilityScore
  | Tool
  | Armor
  | Weapon
  | Vehicle
  | Gear
  | Pack
  | Ammunition;

export enum ProficiencyType {
  Weapons = "WEAPONS",
  ArtisansTools = "ARTISANS_TOOLS",
  Skills = "SKILLS",
  Armor = "ARMOR",
  MusicalInstruments = "MUSICAL_INSTRUMENTS",
  SavingThrows = "SAVING_THROWS",
  Other = "OTHER",
  GamingSets = "GAMING_SETS",
  Vehicles = "VEHICLES",
}

export type Proficiency = {
  __typename?: "Proficiency";
  index: Scalars["String"];
  name: Scalars["String"];
  classes: Array<Class>;
  type: ProficiencyType;
  races: Array<ProficiencyRace>;
  reference: ProficiencyReference;
};

export type ProficiencyClassesArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type ProficiencyRacesArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type ActionDc = {
  __typename?: "ActionDc";
  type: AbilityScore;
  value: Scalars["Int"];
  success: DcSuccess;
};

export type LegendaryAction = {
  __typename?: "LegendaryAction";
  name: Scalars["String"];
  desc: Scalars["String"];
  dc?: Maybe<ActionDc>;
  damage?: Maybe<Array<Damage>>;
};

export type MonsterProficiency = {
  __typename?: "MonsterProficiency";
  proficiency: Proficiency;
  value: Scalars["Int"];
};

export type Reaction = {
  __typename?: "Reaction";
  name: Scalars["String"];
  desc: Scalars["String"];
  dc?: Maybe<ActionDc>;
};

export type Senses = {
  __typename?: "Senses";
  blindsight?: Maybe<Scalars["String"]>;
  darkvision?: Maybe<Scalars["String"]>;
  passive_perception: Scalars["Int"];
  tremorsense?: Maybe<Scalars["String"]>;
  truesight?: Maybe<Scalars["String"]>;
};

export enum RestType {
  Short = "SHORT",
  Long = "LONG",
}

export enum UsageType {
  AtWill = "AT_WILL",
  PerDay = "PER_DAY",
  RechargeOnRoll = "RECHARGE_ON_ROLL",
  RechargeAfterRest = "RECHARGE_AFTER_REST",
  PerRest = "PER_REST",
}

export type Usage = {
  __typename?: "Usage";
  type: UsageType;
  times?: Maybe<Scalars["Int"]>;
  rest_types?: Maybe<Array<RestType>>;
  dice?: Maybe<Scalars["String"]>;
  min_value?: Maybe<Scalars["Int"]>;
};

export type MonsterSpellSlot = {
  __typename?: "MonsterSpellSlot";
  level: Scalars["Int"];
  slots: Scalars["Int"];
};

export type MonsterSpell = {
  __typename?: "MonsterSpell";
  spell: Spell;
  usage?: Maybe<Usage>;
};

export type MonsterSpellcasting = {
  __typename?: "MonsterSpellcasting";
  level?: Maybe<Scalars["Int"]>;
  ability: AbilityScore;
  dc?: Maybe<Scalars["Int"]>;
  modifier?: Maybe<Scalars["Int"]>;
  components_required?: Maybe<Array<SpellComponent>>;
  school?: Maybe<Scalars["String"]>;
  slots?: Maybe<Array<MonsterSpellSlot>>;
  spells: Array<MonsterSpell>;
};

export type SpecialAbility = {
  __typename?: "SpecialAbility";
  name: Scalars["String"];
  desc: Scalars["String"];
  usage?: Maybe<Usage>;
  dc?: Maybe<ActionDc>;
  spellcasting?: Maybe<MonsterSpellcasting>;
  damage?: Maybe<Array<Damage>>;
};

export type MonsterSpeed = {
  __typename?: "MonsterSpeed";
  burrow?: Maybe<Scalars["String"]>;
  climb?: Maybe<Scalars["String"]>;
  fly?: Maybe<Scalars["String"]>;
  hover?: Maybe<Scalars["Boolean"]>;
  swim?: Maybe<Scalars["String"]>;
  walk?: Maybe<Scalars["String"]>;
};

export enum Size {
  Tiny = "TINY",
  Small = "SMALL",
  Medium = "MEDIUM",
  Large = "LARGE",
  Huge = "HUGE",
  Gargantuan = "GARGANTUAN",
}

export enum MonsterType {
  Beast = "BEAST",
  Monstrosity = "MONSTROSITY",
  Dragon = "DRAGON",
  Humanoid = "HUMANOID",
  Undead = "UNDEAD",
  Fiend = "FIEND",
  Celestial = "CELESTIAL",
  Construct = "CONSTRUCT",
  Giant = "GIANT",
  Elemental = "ELEMENTAL",
  Fey = "FEY",
  Aberration = "ABERRATION",
  Ooze = "OOZE",
  Swarm = "SWARM",
  Plant = "PLANT",
}

export enum MonsterSubtype {
  AnyRace = "ANY_RACE",
  Human = "HUMAN",
  Dwarf = "DWARF",
  Elf = "ELF",
  Goblinoid = "GOBLINOID",
  Merfolk = "MERFOLK",
  Shapechanger = "SHAPECHANGER",
  Demon = "DEMON",
  Devil = "DEVIL",
  Orc = "ORC",
  Sahuagin = "SAHUAGIN",
  Titan = "TITAN",
  Kobold = "KOBOLD",
  Gnoll = "GNOLL",
  Grimlock = "GRIMLOCK",
  Lizardfolk = "LIZARDFOLK",
  Gnome = "GNOME",
}

export type ActionOption = {
  __typename?: "ActionOption";
  option_type: Scalars["String"];
  action_name: Scalars["String"];
  count: Scalars["ActionCount"];
  type?: Maybe<Scalars["String"]>;
};

export type MultipleActionOption = {
  __typename?: "MultipleActionOption";
  option_type: Scalars["String"];
  items: Array<ActionOption>;
};

export type MonsterActionOption = ActionOption | MultipleActionOption;

export type MonsterActionOptionSet = {
  __typename?: "MonsterActionOptionSet";
  option_set_type: Scalars["String"];
  options: Array<MonsterActionOption>;
};

export type MonsterActionChoice = {
  __typename?: "MonsterActionChoice";
  choose: Scalars["Int"];
  type: Scalars["String"];
  from: MonsterActionOptionSet;
};

export type Action = {
  __typename?: "Action";
  action_name: Scalars["String"];
  count: Scalars["ActionCount"];
  type: Scalars["String"];
};

export type Attack = {
  __typename?: "Attack";
  damage?: Maybe<Array<Damage>>;
  dc: ActionDc;
  name: Scalars["String"];
};

export type DamageOption = {
  __typename?: "DamageOption";
  option_type: Scalars["String"];
  damage_dice: Scalars["String"];
  damage_type: DamageType;
  notes?: Maybe<Scalars["String"]>;
};

export type DamageOptionSet = {
  __typename?: "DamageOptionSet";
  option_set_type: Scalars["String"];
  options: Array<DamageOption>;
};

export type ActionDamage = {
  __typename?: "ActionDamage";
  damage_dice?: Maybe<Scalars["String"]>;
  damage_type?: Maybe<DamageType>;
  choose?: Maybe<Scalars["Int"]>;
  dc?: Maybe<ActionDc>;
  type?: Maybe<Scalars["String"]>;
  from?: Maybe<DamageOptionSet>;
};

export type BreathOption = {
  __typename?: "BreathOption";
  option_type: Scalars["String"];
  name: Scalars["String"];
  dc: ActionDc;
  damage?: Maybe<Array<Damage>>;
};

export type BreathOptionSet = {
  __typename?: "BreathOptionSet";
  option_set_type: Scalars["String"];
  options: Array<BreathOption>;
};

export type BreathChoice = {
  __typename?: "BreathChoice";
  choose: Scalars["Int"];
  type: Scalars["String"];
  from: BreathOptionSet;
};

export type MonsterAction = {
  __typename?: "MonsterAction";
  action_options?: Maybe<MonsterActionChoice>;
  actions?: Maybe<Array<Action>>;
  name: Scalars["String"];
  multiattack_type?: Maybe<Scalars["String"]>;
  attack_bonus?: Maybe<Scalars["Int"]>;
  attacks?: Maybe<Array<Attack>>;
  damage?: Maybe<Array<ActionDamage>>;
  desc: Scalars["String"];
  dc?: Maybe<ActionDc>;
  options?: Maybe<BreathChoice>;
  usage?: Maybe<Usage>;
};

export type Monster = {
  __typename?: "Monster";
  index: Scalars["String"];
  name: Scalars["String"];
  armor_class: Scalars["Int"];
  desc?: Maybe<Scalars["String"]>;
  actions?: Maybe<Array<MonsterAction>>;
  challenge_rating: Scalars["Float"];
  charisma: Scalars["Int"];
  condition_immunities: Array<Condition>;
  constitution: Scalars["Int"];
  damage_immunities: Array<Scalars["String"]>;
  damage_resistances: Array<Scalars["String"]>;
  damage_vulnerabilities: Array<Scalars["String"]>;
  dexterity: Scalars["Int"];
  forms?: Maybe<Array<Monster>>;
  hit_dice: Scalars["String"];
  hit_points: Scalars["Int"];
  intelligence: Scalars["Int"];
  languages: Scalars["String"];
  legendary_actions?: Maybe<Array<LegendaryAction>>;
  proficiencies: Array<MonsterProficiency>;
  reactions?: Maybe<Array<Reaction>>;
  senses: Senses;
  size: Size;
  special_abilities?: Maybe<Array<SpecialAbility>>;
  speed: MonsterSpeed;
  strength: Scalars["Int"];
  subtype?: Maybe<MonsterSubtype>;
  type: MonsterType;
  wisdom: Scalars["Int"];
  xp: Scalars["Int"];
};

export type ProficiencyReferenceOption = {
  __typename?: "ProficiencyReferenceOption";
  option_type: Scalars["String"];
  item: Proficiency;
};

export type ProficiencyChoiceOption = {
  __typename?: "ProficiencyChoiceOption";
  option_type: Scalars["String"];
  choice: ProficiencyChoice;
};

export type ProficiencyOption =
  | ProficiencyChoiceOption
  | ProficiencyReferenceOption;

export type ProficiencyOptionSet = {
  __typename?: "ProficiencyOptionSet";
  option_set_type: Scalars["String"];
  options: Array<ProficiencyOption>;
};

export type ProficiencyChoice = {
  __typename?: "ProficiencyChoice";
  desc?: Maybe<Scalars["String"]>;
  choose: Scalars["Int"];
  type: Scalars["String"];
  from: ProficiencyOptionSet;
};

export type BreathWeaponDc = {
  __typename?: "BreathWeaponDc";
  type: AbilityScore;
  success: DcSuccess;
};

export type BreathWeaponUsage = {
  __typename?: "BreathWeaponUsage";
  times: Scalars["Int"];
  type: UsageType;
};

export type BreathWeaponDamage = {
  __typename?: "BreathWeaponDamage";
  damage_at_character_level: Array<DamageAtLevel>;
  damage_type: DamageType;
};

export type BreathWeaponTrait = {
  __typename?: "BreathWeaponTrait";
  name: Scalars["String"];
  desc: Scalars["String"];
  dc: BreathWeaponDc;
  usage: BreathWeaponUsage;
  damage: Array<BreathWeaponDamage>;
  area_of_effect: AreaOfEffect;
};

export type SpellOption = {
  __typename?: "SpellOption";
  option_type: Scalars["String"];
  item: Spell;
};

export type SpellOptionSet = {
  __typename?: "SpellOptionSet";
  option_set_type: Scalars["String"];
  options: Array<SpellOption>;
};

export type SpellChoice = {
  __typename?: "SpellChoice";
  choose: Scalars["Int"];
  type: Scalars["String"];
  from: SpellOptionSet;
};

export type TraitOption = {
  __typename?: "TraitOption";
  option_type: Scalars["String"];
  item: Trait;
};

export type TraitOptionSet = {
  __typename?: "TraitOptionSet";
  option_set_type: Scalars["String"];
  options: Array<TraitOption>;
};

export type TraitChoice = {
  __typename?: "TraitChoice";
  choose: Scalars["Int"];
  type: Scalars["String"];
  from: TraitOptionSet;
};

export type TraitSpecific = {
  __typename?: "TraitSpecific";
  breath_weapon?: Maybe<BreathWeaponTrait>;
  damage_type?: Maybe<DamageType>;
  spell_options?: Maybe<SpellChoice>;
  subtrait_options?: Maybe<TraitChoice>;
};

export type Trait = {
  __typename?: "Trait";
  index: Scalars["String"];
  desc: Array<Scalars["String"]>;
  name: Scalars["String"];
  proficiencies: Array<Proficiency>;
  parent?: Maybe<Trait>;
  races: Array<Maybe<Race>>;
  subraces: Array<Subrace>;
  proficiency_choices?: Maybe<ProficiencyChoice>;
  language_options?: Maybe<LanguageChoice>;
  trait_specific?: Maybe<TraitSpecific>;
};

export type TraitProficienciesArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type TraitRacesArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type TraitSubracesArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type AbilityBonus = {
  __typename?: "AbilityBonus";
  ability_score: AbilityScore;
  bonus: Scalars["Int"];
};

export type AbilityBonusOption = {
  __typename?: "AbilityBonusOption";
  option_type: Scalars["String"];
  bonus: Scalars["Int"];
  ability_score: AbilityScore;
};

export type AbilityBonusOptionSet = {
  __typename?: "AbilityBonusOptionSet";
  option_set_type: Scalars["String"];
  options: Array<AbilityBonusOption>;
};

export type AbilityBonusChoice = {
  __typename?: "AbilityBonusChoice";
  choose: Scalars["Int"];
  type: Scalars["String"];
  from: AbilityBonusOptionSet;
};

export type LanguageOption = {
  __typename?: "LanguageOption";
  option_type: Scalars["String"];
  item: Language;
};

export type LanguageOptionSet = {
  __typename?: "LanguageOptionSet";
  option_set_type: Scalars["String"];
  options: Array<LanguageOption>;
};

export type LanguageChoice = {
  __typename?: "LanguageChoice";
  choose: Scalars["Int"];
  type: Scalars["String"];
  from: LanguageOptionSet;
};

export type Race = ProficiencyRace & {
  __typename?: "Race";
  index: Scalars["String"];
  name: Scalars["String"];
  ability_bonuses: Array<AbilityBonus>;
  ability_bonus_options?: Maybe<AbilityBonusChoice>;
  age: Scalars["String"];
  alignment: Scalars["String"];
  language_desc: Scalars["String"];
  languages: Array<Language>;
  language_options?: Maybe<LanguageChoice>;
  size: Size;
  size_description: Scalars["String"];
  speed: Scalars["Int"];
  starting_proficiencies: Array<Proficiency>;
  starting_proficiency_options?: Maybe<ProficiencyChoice>;
  subraces: Array<Subrace>;
  traits: Array<Trait>;
};

export type RaceLanguagesArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type RaceStarting_ProficienciesArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type RaceSubracesArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type RaceTraitsArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type Subrace = ProficiencyRace & {
  __typename?: "Subrace";
  index: Scalars["String"];
  name: Scalars["String"];
  ability_bonuses: Array<AbilityBonus>;
  desc: Scalars["String"];
  race: Race;
  racial_traits: Array<Trait>;
  starting_proficiencies: Array<Proficiency>;
  language_options?: Maybe<LanguageChoice>;
};

export type SubraceRacial_TraitsArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type SubraceStarting_ProficienciesArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type ProficiencyRace = {
  index: Scalars["String"];
  name: Scalars["String"];
  ability_bonuses: Array<AbilityBonus>;
};

export type BackgroundFeature = {
  __typename?: "BackgroundFeature";
  name: Scalars["String"];
  desc: Array<Scalars["String"]>;
};

export type EquipmentCategoryOptionSet = {
  __typename?: "EquipmentCategoryOptionSet";
  option_set_type: Scalars["String"];
  equipment_category: EquipmentCategory;
};

export type EquipmentCategoryChoice = {
  __typename?: "EquipmentCategoryChoice";
  choose: Scalars["Int"];
  type: Scalars["String"];
  from: EquipmentCategoryOptionSet;
};

export type IdealOption = {
  __typename?: "IdealOption";
  option_type: Scalars["String"];
  desc: Scalars["String"];
  alignments: Array<Alignment>;
};

export type IdealOptionSet = {
  __typename?: "IdealOptionSet";
  option_set_type: Scalars["String"];
  options: Array<IdealOption>;
};

export type IdealChoice = {
  __typename?: "IdealChoice";
  choose: Scalars["Int"];
  type: Scalars["String"];
  from: IdealOptionSet;
};

export type StringOption = {
  __typename?: "StringOption";
  option_type: Scalars["String"];
  string: Scalars["String"];
};

export type StringOptionSet = {
  __typename?: "StringOptionSet";
  option_set_type: Scalars["String"];
  options: Array<StringOption>;
};

export type StringChoice = {
  __typename?: "StringChoice";
  choose: Scalars["Int"];
  type: Scalars["String"];
  from: StringOptionSet;
};

export type Background = {
  __typename?: "Background";
  index: Scalars["String"];
  name: Scalars["String"];
  starting_proficiencies: Array<Proficiency>;
  starting_equipment: Array<Quantity>;
  feature: BackgroundFeature;
  language_options: LanguageChoice;
  starting_equipment_options: Array<EquipmentCategoryChoice>;
  ideals: IdealChoice;
  personality_traits: StringChoice;
  bonds: StringChoice;
  flaws: StringChoice;
};

export type BackgroundStarting_ProficienciesArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type BackgroundStarting_EquipmentArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type SpellcastingInfo = {
  __typename?: "SpellcastingInfo";
  name: Scalars["String"];
  desc: Array<Scalars["String"]>;
};

export type ClassSpellcasting = {
  __typename?: "ClassSpellcasting";
  info: Array<SpellcastingInfo>;
  level: Scalars["Int"];
  spellcasting_ability: AbilityScore;
};

export type PrerequisiteOption = {
  __typename?: "PrerequisiteOption";
  option_type: Scalars["String"];
  ability_score: AbilityScore;
  minimum_score: Scalars["Int"];
};

export type PrerequisiteOptionSet = {
  __typename?: "PrerequisiteOptionSet";
  option_set_type: Scalars["String"];
  options: Array<PrerequisiteOption>;
};

export type PrerequisiteChoice = {
  __typename?: "PrerequisiteChoice";
  choose: Scalars["Int"];
  type: Scalars["String"];
  from: PrerequisiteOptionSet;
};

export type Multiclassing = {
  __typename?: "Multiclassing";
  prerequisites?: Maybe<Array<AbilityScorePrerequisite>>;
  prerequisite_options?: Maybe<PrerequisiteChoice>;
  proficiencies: Array<Proficiency>;
  proficiency_choices?: Maybe<Array<ProficiencyChoice>>;
};

export type ProficiencyPrerequisite = {
  __typename?: "ProficiencyPrerequisite";
  type: Scalars["String"];
  proficiency: Proficiency;
};

export type CountedReferenceOption = {
  __typename?: "CountedReferenceOption";
  option_type: Scalars["String"];
  count: Scalars["Int"];
  of: IEquipment;
  prerequisites?: Maybe<Array<ProficiencyPrerequisite>>;
};

export type EquipmentCategoryChoiceOption = {
  __typename?: "EquipmentCategoryChoiceOption";
  option_type: Scalars["String"];
  choice: EquipmentCategoryChoice;
};

export type EquipmentMultipleItem =
  | CountedReferenceOption
  | EquipmentCategoryChoiceOption;

export type EquipmentMultipleOption = {
  __typename?: "EquipmentMultipleOption";
  option_type: Scalars["String"];
  items: Array<EquipmentMultipleItem>;
};

export type EquipmentOption =
  | CountedReferenceOption
  | EquipmentCategoryChoiceOption
  | EquipmentMultipleOption;

export type EquipmentOptionSet = {
  __typename?: "EquipmentOptionSet";
  option_set_type: Scalars["String"];
  options: Array<EquipmentOption>;
};

export type StartingEquipmentOptionSet =
  | EquipmentCategoryOptionSet
  | EquipmentOptionSet;

export type StartingEquipmentChoice = {
  __typename?: "StartingEquipmentChoice";
  choose: Scalars["Int"];
  desc: Scalars["String"];
  type: Scalars["String"];
  from: StartingEquipmentOptionSet;
};

export type Class = {
  __typename?: "Class";
  index: Scalars["String"];
  name: Scalars["String"];
  hit_die: Scalars["Int"];
  proficiencies: Array<Proficiency>;
  saving_throws: Array<AbilityScore>;
  spellcasting?: Maybe<ClassSpellcasting>;
  spells?: Maybe<Array<Spell>>;
  starting_equipment: Array<Quantity>;
  class_levels: Array<Level>;
  subclasses: Array<Subclass>;
  multi_classing: Multiclassing;
  proficiency_choices: Array<ProficiencyChoice>;
  starting_equipment_options: Array<StartingEquipmentChoice>;
};

export type ClassProficienciesArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type ClassSpellsArgs = {
  school?: InputMaybe<Scalars["StringFilter"]>;
  level?: InputMaybe<Scalars["IntFilter"]>;
  subclass?: InputMaybe<Scalars["StringFilter"]>;
  concentration?: InputMaybe<Scalars["Boolean"]>;
  ritual?: InputMaybe<Scalars["Boolean"]>;
  attack_type?: InputMaybe<Scalars["SpellAttackTypeFilter"]>;
  casting_time?: InputMaybe<Scalars["StringFilter"]>;
  area_of_effect?: InputMaybe<AreaOfEffectFilter>;
  damage_type?: InputMaybe<Scalars["StringFilter"]>;
  dc_type?: InputMaybe<Scalars["StringFilter"]>;
  range?: InputMaybe<Scalars["StringFilter"]>;
  order?: InputMaybe<SpellOrder>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
};

export type ClassSubclassesArgs = {
  name?: InputMaybe<Scalars["String"]>;
};

export type FeaturePrerequisite = {
  __typename?: "FeaturePrerequisite";
  type: Scalars["String"];
  feature?: Maybe<Feature>;
  level?: Maybe<Scalars["Int"]>;
  spell?: Maybe<Spell>;
};

export type FeatureOption = {
  __typename?: "FeatureOption";
  option_type: Scalars["String"];
  item: Feature;
};

export type FeatureOptionSet = {
  __typename?: "FeatureOptionSet";
  option_set_type: Scalars["String"];
  options: Array<FeatureOption>;
};

export type FeatureChoice = {
  __typename?: "FeatureChoice";
  choose: Scalars["Int"];
  type: Scalars["String"];
  from: FeatureOptionSet;
};

export type ExpertiseMultipleOption = {
  __typename?: "ExpertiseMultipleOption";
  option_type: Scalars["String"];
  items: Array<ProficiencyOption>;
};

export type ExpertiseOption =
  | ExpertiseMultipleOption
  | ProficiencyChoiceOption
  | ProficiencyReferenceOption;

export type ExpertiseOptionSet = {
  __typename?: "ExpertiseOptionSet";
  option_set_type: Scalars["String"];
  options: Array<ExpertiseOption>;
};

export type ExpertiseChoice = {
  __typename?: "ExpertiseChoice";
  choose: Scalars["Int"];
  type: Scalars["String"];
  from: ExpertiseOptionSet;
};

export type FeatureSpecific = {
  __typename?: "FeatureSpecific";
  expertise_options?: Maybe<ExpertiseChoice>;
  subfeature_options?: Maybe<FeatureChoice>;
};

export type Feature = {
  __typename?: "Feature";
  index: Scalars["String"];
  name: Scalars["String"];
  level: Scalars["Int"];
  desc: Array<Scalars["String"]>;
  parent?: Maybe<Feature>;
  class: Class;
  subclass?: Maybe<Subclass>;
  prerequisites: Array<FeaturePrerequisite>;
  reference?: Maybe<Scalars["String"]>;
  feature_specific?: Maybe<FeatureSpecific>;
};

export type LevelSpellcasting = {
  __typename?: "LevelSpellcasting";
  cantrips_known?: Maybe<Scalars["Int"]>;
  spell_slots_level_1?: Maybe<Scalars["Int"]>;
  spell_slots_level_2?: Maybe<Scalars["Int"]>;
  spell_slots_level_3?: Maybe<Scalars["Int"]>;
  spell_slots_level_4?: Maybe<Scalars["Int"]>;
  spell_slots_level_5?: Maybe<Scalars["Int"]>;
  spell_slots_level_6?: Maybe<Scalars["Int"]>;
  spell_slots_level_7?: Maybe<Scalars["Int"]>;
  spell_slots_level_8?: Maybe<Scalars["Int"]>;
  spell_slots_level_9?: Maybe<Scalars["Int"]>;
  spells_known?: Maybe<Scalars["Int"]>;
};

export type Dice = {
  __typename?: "Dice";
  dice_count: Scalars["Int"];
  dice_value: Scalars["Int"];
};

export type BarbarianSpecific = {
  __typename?: "BarbarianSpecific";
  rage_count: Scalars["Int"];
  rage_damage_bonus: Scalars["Int"];
  brutal_critical_dice: Scalars["Int"];
};

export type BardSpecific = {
  __typename?: "BardSpecific";
  bardic_inspiration_die: Scalars["Int"];
  song_of_rest_die: Scalars["Int"];
  magical_secrets_max_5: Scalars["Int"];
  magical_secrets_max_7: Scalars["Int"];
  magical_secrets_max_9: Scalars["Int"];
};

export type ClericSpecific = {
  __typename?: "ClericSpecific";
  channel_divinity_charges: Scalars["Int"];
  destroy_undead_cr: Scalars["Float"];
};

export type DruidSpecific = {
  __typename?: "DruidSpecific";
  wild_shape_max_cr: Scalars["Float"];
  wild_shape_swim: Scalars["Boolean"];
  wild_shape_fly: Scalars["Boolean"];
};

export type FighterSpecific = {
  __typename?: "FighterSpecific";
  action_surges: Scalars["Int"];
  indomitable_uses: Scalars["Int"];
  extra_attacks: Scalars["Int"];
};

export type MonkSpecific = {
  __typename?: "MonkSpecific";
  martial_arts: Dice;
  ki_points: Scalars["Int"];
  unarmored_movement: Scalars["Int"];
};

export type PaladinSpecific = {
  __typename?: "PaladinSpecific";
  aura_range: Scalars["Int"];
};

export type RangerSpecific = {
  __typename?: "RangerSpecific";
  favored_enemies: Scalars["Int"];
  favored_terrain: Scalars["Int"];
};

export type RogueSpecific = {
  __typename?: "RogueSpecific";
  sneak_attack: Dice;
};

export type SpellSlotCreation = {
  __typename?: "SpellSlotCreation";
  sorcery_point_cost: Scalars["Int"];
  spell_slot_level: Scalars["Int"];
};

export type SorcererSpecific = {
  __typename?: "SorcererSpecific";
  sorcery_points: Scalars["Int"];
  metamagic_known: Scalars["Int"];
  creating_spell_slots: Array<SpellSlotCreation>;
};

export type WarlockSpecific = {
  __typename?: "WarlockSpecific";
  invocations_known: Scalars["Int"];
  mystic_arcanum_level_6: Scalars["Int"];
  mystic_arcanum_level_7: Scalars["Int"];
  mystic_arcanum_level_8: Scalars["Int"];
  mystic_arcanum_level_9: Scalars["Int"];
};

export type WizardSpecific = {
  __typename?: "WizardSpecific";
  arcane_recovery_levels: Scalars["Int"];
};

export type ClassSpecific =
  | BarbarianSpecific
  | BardSpecific
  | ClericSpecific
  | DruidSpecific
  | FighterSpecific
  | MonkSpecific
  | PaladinSpecific
  | RangerSpecific
  | RogueSpecific
  | SorcererSpecific
  | WarlockSpecific
  | WizardSpecific;

export type DevotionSpecific = {
  __typename?: "DevotionSpecific";
  aura_range: Scalars["Int"];
};

export type LoreSpecific = {
  __typename?: "LoreSpecific";
  additional_magical_secrets_max_lvl: Scalars["Int"];
};

export type SubclassSpecific = DevotionSpecific | LoreSpecific;

export type Level = {
  __typename?: "Level";
  index: Scalars["String"];
  level: Scalars["Int"];
  ability_score_bonuses?: Maybe<Scalars["Int"]>;
  class: Class;
  subclass?: Maybe<Subclass>;
  features: Array<Feature>;
  prof_bonus?: Maybe<Scalars["Int"]>;
  spellcasting?: Maybe<LevelSpellcasting>;
  class_specific?: Maybe<ClassSpecific>;
  subclass_specific?: Maybe<SubclassSpecific>;
};

export type LevelFeaturesArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
};

export type SpellPrerequisite = Feature | Level;

export type SpellWithPrerequisite = {
  __typename?: "SpellWithPrerequisite";
  prerequisites: Array<Maybe<SpellPrerequisite>>;
  spell: Spell;
};

export type Subclass = {
  __typename?: "Subclass";
  index: Scalars["String"];
  name: Scalars["String"];
  desc: Array<Scalars["String"]>;
  class: Class;
  subclass_flavor: Scalars["String"];
  subclass_levels: Array<Maybe<Level>>;
  spells?: Maybe<Array<SpellWithPrerequisite>>;
};

export type SubclassSpellsArgs = {
  school?: InputMaybe<Scalars["StringFilter"]>;
  class?: InputMaybe<Scalars["StringFilter"]>;
  level?: InputMaybe<Scalars["IntFilter"]>;
  concentration?: InputMaybe<Scalars["Boolean"]>;
  ritual?: InputMaybe<Scalars["Boolean"]>;
  attack_type?: InputMaybe<Scalars["SpellAttackTypeFilter"]>;
  casting_time?: InputMaybe<Scalars["StringFilter"]>;
  area_of_effect?: InputMaybe<AreaOfEffectFilter>;
  damage_type?: InputMaybe<Scalars["StringFilter"]>;
  dc_type?: InputMaybe<Scalars["StringFilter"]>;
  range?: InputMaybe<Scalars["StringFilter"]>;
  order?: InputMaybe<SpellOrder>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
};

export type AreaOfEffectFilter = {
  type?: InputMaybe<Scalars["AreaOfEffectTypeFilter"]>;
  size?: InputMaybe<Scalars["IntFilter"]>;
};

export enum OrderByDirection {
  Ascending = "ASCENDING",
  Descending = "DESCENDING",
}

export type SpellOrder = {
  by: SpellOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<SpellOrder>;
};

export enum SpellOrderBy {
  Name = "NAME",
  Level = "LEVEL",
  AreaOfEffectSize = "AREA_OF_EFFECT_SIZE",
  Concentration = "CONCENTRATION",
  Ritual = "RITUAL",
  School = "SCHOOL",
}

export type EquipmentOrder = {
  by: EquipmentOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<EquipmentOrder>;
};

export enum EquipmentOrderBy {
  Name = "NAME",
  Weight = "WEIGHT",
  EquipmentCategory = "EQUIPMENT_CATEGORY",
}

export type ClassOrder = {
  by: ClassOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<ClassOrder>;
};

export enum ClassOrderBy {
  Name = "NAME",
  HitDie = "HIT_DIE",
}

export type MagicItemOrder = {
  by: MagicItemOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<MagicItemOrder>;
};

export enum MagicItemOrderBy {
  Name = "NAME",
  EquipmentCategory = "EQUIPMENT_CATEGORY",
}

export type EquipmentCategoryOrder = {
  by: EquipmentCategoryOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<EquipmentCategoryOrder>;
};

export enum EquipmentCategoryOrderBy {
  Name = "NAME",
  Weight = "WEIGHT",
}

export type FeatureOrder = {
  by: FeatureOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<FeatureOrder>;
};

export enum FeatureOrderBy {
  Name = "NAME",
  Level = "LEVEL",
  Class = "CLASS",
  Subclass = "SUBCLASS",
}

export type LanguageOrder = {
  by: LanguageOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<LanguageOrder>;
};

export enum LanguageOrderBy {
  Name = "NAME",
  Type = "TYPE",
  Script = "SCRIPT",
}

export type LevelOrder = {
  by: LevelOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<LevelOrder>;
};

export enum LevelOrderBy {
  Level = "LEVEL",
  Class = "CLASS",
  Subclass = "SUBCLASS",
  ProfBonus = "PROF_BONUS",
  AbilityScoreBonuses = "ABILITY_SCORE_BONUSES",
}

export type MonsterOrder = {
  by: MonsterOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<MonsterOrder>;
};

export enum MonsterOrderBy {
  Name = "NAME",
  Size = "SIZE",
  Type = "TYPE",
  Subtype = "SUBTYPE",
  ArmorClass = "ARMOR_CLASS",
  ChallengeRating = "CHALLENGE_RATING",
  Charisma = "CHARISMA",
  Constitution = "CONSTITUTION",
  Strength = "STRENGTH",
  Wisdom = "WISDOM",
  Intelligence = "INTELLIGENCE",
  Dexterity = "DEXTERITY",
  Xp = "XP",
}

export type ProficiencyOrder = {
  by: ProficiencyOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<ProficiencyOrder>;
};

export enum ProficiencyOrderBy {
  Name = "NAME",
  Type = "TYPE",
}

export type RaceOrder = {
  by: RaceOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<RaceOrder>;
};

export enum RaceOrderBy {
  Name = "NAME",
  Size = "SIZE",
  Speed = "SPEED",
}

export type SkillOrder = {
  by: SkillOrderBy;
  direction?: OrderByDirection;
  then_by?: InputMaybe<SkillOrder>;
};

export enum SkillOrderBy {
  Name = "NAME",
  AbilityScore = "ABILITY_SCORE",
}

export type Query = {
  __typename?: "Query";
  abilityScore?: Maybe<AbilityScore>;
  abilityScores?: Maybe<Array<AbilityScore>>;
  alignment?: Maybe<Alignment>;
  alignments?: Maybe<Array<Alignment>>;
  background?: Maybe<Background>;
  backgrounds: Array<Background>;
  class?: Maybe<Class>;
  classes: Array<Class>;
  condition?: Maybe<Condition>;
  conditions?: Maybe<Array<Condition>>;
  damageType?: Maybe<DamageType>;
  damageTypes?: Maybe<Array<DamageType>>;
  equipment?: Maybe<IEquipment>;
  equipments?: Maybe<Array<IEquipment>>;
  equipmentCategory?: Maybe<EquipmentCategory>;
  equipmentCategories?: Maybe<Array<EquipmentCategory>>;
  feat?: Maybe<Feat>;
  feats?: Maybe<Array<Feat>>;
  feature?: Maybe<Feature>;
  features?: Maybe<Array<Feature>>;
  language?: Maybe<Language>;
  languages?: Maybe<Array<Language>>;
  level?: Maybe<Level>;
  levels?: Maybe<Array<Level>>;
  magicItem?: Maybe<MagicItem>;
  magicItems?: Maybe<Array<MagicItem>>;
  magicSchool?: Maybe<MagicSchool>;
  magicSchools?: Maybe<Array<MagicSchool>>;
  monster?: Maybe<Monster>;
  monsters?: Maybe<Array<Monster>>;
  proficiency?: Maybe<Proficiency>;
  proficiencies?: Maybe<Array<Proficiency>>;
  race?: Maybe<Race>;
  races: Array<Race>;
  rule?: Maybe<Rule>;
  rules?: Maybe<Array<Maybe<Rule>>>;
  ruleSection?: Maybe<RuleSection>;
  ruleSections?: Maybe<Array<RuleSection>>;
  skill?: Maybe<Skill>;
  skills?: Maybe<Array<Skill>>;
  spell?: Maybe<Spell>;
  spells?: Maybe<Array<Spell>>;
  subclass?: Maybe<Subclass>;
  subclasses: Array<Subclass>;
  subrace?: Maybe<Subrace>;
  subraces: Array<Subrace>;
  trait?: Maybe<Trait>;
  traits?: Maybe<Array<Trait>>;
  weaponProperty?: Maybe<WeaponProperty>;
  weaponProperties?: Maybe<Array<Maybe<WeaponProperty>>>;
};

export type QueryAbilityScoreArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryAbilityScoresArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
  full_name?: InputMaybe<Scalars["String"]>;
};

export type QueryAlignmentArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryAlignmentsArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryBackgroundArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryBackgroundsArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryClassArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryClassesArgs = {
  hit_die?: InputMaybe<Scalars["IntFilter"]>;
  order?: InputMaybe<ClassOrder>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryConditionArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryConditionsArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryDamageTypeArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryDamageTypesArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryEquipmentArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryEquipmentsArgs = {
  equipment_category?: InputMaybe<Scalars["StringFilter"]>;
  order?: InputMaybe<EquipmentOrder>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryEquipmentCategoryArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryEquipmentCategoriesArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryFeatArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryFeatsArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryFeatureArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryFeaturesArgs = {
  level?: InputMaybe<Scalars["IntFilter"]>;
  class?: InputMaybe<Scalars["StringFilter"]>;
  subclass?: InputMaybe<Scalars["StringFilter"]>;
  order?: InputMaybe<FeatureOrder>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryLanguageArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryLanguagesArgs = {
  type?: InputMaybe<LanguageType>;
  script?: InputMaybe<Scalars["LanguageScriptFilter"]>;
  order?: InputMaybe<LanguageOrder>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryLevelArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryLevelsArgs = {
  class?: InputMaybe<Scalars["StringFilter"]>;
  subclass?: InputMaybe<Scalars["StringFilter"]>;
  level?: InputMaybe<Scalars["IntFilter"]>;
  prof_bonus?: InputMaybe<Scalars["IntFilter"]>;
  ability_score_bonuses?: InputMaybe<Scalars["IntFilter"]>;
  order?: InputMaybe<LevelOrder>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: Scalars["Int"];
};

export type QueryMagicItemArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryMagicItemsArgs = {
  equipment_category?: InputMaybe<Scalars["StringFilter"]>;
  order?: InputMaybe<MagicItemOrder>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryMagicSchoolArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryMagicSchoolsArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryMonsterArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryMonstersArgs = {
  size?: InputMaybe<Scalars["SizeFilter"]>;
  type?: InputMaybe<Scalars["MonsterTypeFilter"]>;
  subtype?: InputMaybe<Scalars["MonsterSubtypeFilter"]>;
  damage_immunity?: InputMaybe<Scalars["StringFilter"]>;
  damage_resistance?: InputMaybe<Scalars["StringFilter"]>;
  damage_vulnerability?: InputMaybe<Scalars["StringFilter"]>;
  armor_class?: InputMaybe<Scalars["IntFilter"]>;
  challenge_rating?: InputMaybe<Scalars["FloatFilter"]>;
  charisma?: InputMaybe<Scalars["IntFilter"]>;
  constitution?: InputMaybe<Scalars["IntFilter"]>;
  dexterity?: InputMaybe<Scalars["IntFilter"]>;
  intelligence?: InputMaybe<Scalars["IntFilter"]>;
  strength?: InputMaybe<Scalars["IntFilter"]>;
  wisdom?: InputMaybe<Scalars["IntFilter"]>;
  xp?: InputMaybe<Scalars["IntFilter"]>;
  order?: InputMaybe<MonsterOrder>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryProficiencyArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryProficienciesArgs = {
  class?: InputMaybe<Scalars["StringFilter"]>;
  race?: InputMaybe<Scalars["StringFilter"]>;
  type?: InputMaybe<Scalars["ProficiencyTypeFilter"]>;
  order?: InputMaybe<ProficiencyOrder>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryRaceArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryRacesArgs = {
  ability_bonus?: InputMaybe<Scalars["StringFilter"]>;
  size?: InputMaybe<Scalars["SizeFilter"]>;
  language?: InputMaybe<Scalars["StringFilter"]>;
  speed?: InputMaybe<Scalars["IntFilter"]>;
  order?: InputMaybe<RaceOrder>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryRuleArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryRulesArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryRuleSectionArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryRuleSectionsArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QuerySkillArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QuerySkillsArgs = {
  ability_score?: InputMaybe<Scalars["StringFilter"]>;
  order?: InputMaybe<SkillOrder>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QuerySpellArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QuerySpellsArgs = {
  school?: InputMaybe<Scalars["StringFilter"]>;
  level?: InputMaybe<Scalars["IntFilter"]>;
  class?: InputMaybe<Scalars["StringFilter"]>;
  subclass?: InputMaybe<Scalars["StringFilter"]>;
  concentration?: InputMaybe<Scalars["Boolean"]>;
  ritual?: InputMaybe<Scalars["Boolean"]>;
  attack_type?: InputMaybe<Scalars["SpellAttackTypeFilter"]>;
  casting_time?: InputMaybe<Scalars["StringFilter"]>;
  area_of_effect?: InputMaybe<AreaOfEffectFilter>;
  damage_type?: InputMaybe<Scalars["StringFilter"]>;
  dc_type?: InputMaybe<Scalars["StringFilter"]>;
  range?: InputMaybe<Scalars["StringFilter"]>;
  order?: InputMaybe<SpellOrder>;
  skip?: InputMaybe<Scalars["Int"]>;
  limit?: Scalars["Int"];
  name?: InputMaybe<Scalars["String"]>;
};

export type QuerySubclassArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QuerySubclassesArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QuerySubraceArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QuerySubracesArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryTraitArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryTraitsArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
};

export type QueryWeaponPropertyArgs = {
  index?: InputMaybe<Scalars["String"]>;
};

export type QueryWeaponPropertiesArgs = {
  order_direction?: InputMaybe<OrderByDirection>;
  name?: InputMaybe<Scalars["String"]>;
};
