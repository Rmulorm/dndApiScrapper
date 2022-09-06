import { AfterViewInit, Component, HostListener, OnInit } from "@angular/core";
import { ApolloQueryResult } from "@apollo/client/core";
import { Apollo, gql, QueryRef } from "apollo-angular";
import {
  MagicItem as ApiMagicItem,
  MagicItemOrder,
  MagicItemOrderBy,
  OrderByDirection,
} from "src/app/types/dnd-api-types";
import { MagicItem } from "../magic-items-types";

interface MagicItemListQueryVariables {
  equipmentCategory: string | null;
  order: MagicItemOrder;
}

interface MagicItemListQueryResponse {
  magicItems: ApiMagicItem[];
}

const MAGIC_ITEM_LIST_QUERY = gql<
  MagicItemListQueryResponse,
  MagicItemListQueryVariables
>`
  query MagicItemsQuery(
    $equipmentCategory: StringFilter
    $order: MagicItemOrder
  ) {
    magicItems(equipment_category: $equipmentCategory, order: $order) {
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

const MINIMUM_COLUMN_WIDTH = 400;

@Component({
  selector: "app-magic-items-list",
  templateUrl: "./magic-items-list.component.html",
  styleUrls: ["./magic-items-list.component.scss"],
})
export class MagicItemsListComponent implements OnInit, AfterViewInit {
  magicItemList: MagicItem[] = [];
  loading = true;
  error: any;

  gridColumns: number;

  magicItemListQuery: QueryRef<
    MagicItemListQueryResponse,
    MagicItemListQueryVariables
  >;
  spellsQueryVariables: MagicItemListQueryVariables = {
    equipmentCategory: null,
    order: {
      by: MagicItemOrderBy.EquipmentCategory,
      direction: OrderByDirection.Descending,
      then_by: {
        by: MagicItemOrderBy.Name,
        direction: OrderByDirection.Ascending,
      },
    },
  };

  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.magicItemListQuery = this.apollo.watchQuery({
      query: MAGIC_ITEM_LIST_QUERY,
      variables: this.spellsQueryVariables,
    });

    this.magicItemListQuery.valueChanges.subscribe((result) => {
      this.updateMagicItemList(result);
    });
  }

  updateMagicItemList(
    result: ApolloQueryResult<MagicItemListQueryResponse>
  ): void {
    this.loading = result.loading;
    this.error = result.error;
    this.magicItemList = result?.data?.magicItems.map(
      (magicItem) =>
        ({
          ...magicItem,
        } as MagicItem)
    );
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
}
