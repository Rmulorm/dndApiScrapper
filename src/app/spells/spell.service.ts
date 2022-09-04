import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { map, Observable } from "rxjs";
import { Spell } from "../types/dnd-api-types";

interface SpellQueryResponse {
  spell: Spell;
}

interface SpellQueryVariables {
  index: string;
}

const SPELL_QUERY = gql<SpellQueryResponse, SpellQueryVariables>`
  query SpellQuery($index: String) {
    spell(index: $index) {
      index
      area_of_effect {
        type
        size
      }
      attack_type
      casting_time
      classes {
        index
        name
      }
      subclasses {
        index
        name
        class {
          index
          name
        }
      }
      components
      concentration
      damage {
        damage_at_slot_level {
          level
          damage
        }
        damage_at_character_level {
          level
          damage
        }
        damage_type {
          index
          name
          desc
        }
      }
      dc {
        success
        type {
          index
          name
          full_name
        }
        desc
      }
      desc
      duration
      heal_at_slot_level {
        level
        healing
      }
      higher_level
      level
      material
      name
      range
      ritual
      school {
        index
        name
      }
    }
  }
`;

@Injectable({
  providedIn: "root",
})
export class SpellsService {
  constructor(private apollo: Apollo) {}

  getSpell(id: string): Observable<Spell> {
    return this.apollo
      .query({
        query: SPELL_QUERY,
        variables: {
          index: id,
        },
      })
      .pipe<Spell>(
        map((spell) => {
          return spell?.data?.spell;
        })
      );
  }
}
