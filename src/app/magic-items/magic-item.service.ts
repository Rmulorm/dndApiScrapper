import { Injectable } from "@angular/core";
import { Apollo, gql } from "apollo-angular";
import { map, Observable } from "rxjs";
import { MagicItem } from "../types/dnd-api-types";

interface MagicItemQueryResponse {
  magicItem: MagicItem;
}

interface MagicItemQueryVariables {
  index: string;
}

const MAGIC_ITEM_QUERY = gql<MagicItemQueryResponse, MagicItemQueryVariables>`
  query MagicItem($index: String) {
    magicItem(index: $index) {
      index
      name
      desc
      rarity
      equipment_category {
        index
        name
      }
    }
  }
`;

@Injectable({
  providedIn: "root",
})
export class MagicItemService {
  constructor(private apollo: Apollo) {}

  getMagicItem(id: string): Observable<MagicItem> {
    return this.apollo
      .query({
        query: MAGIC_ITEM_QUERY,
        variables: {
          index: id,
        },
      })
      .pipe<MagicItem>(
        map((magicItem) => {
          return magicItem?.data?.magicItem;
        })
      );
  }
}
