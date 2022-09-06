import { MagicItem as ApiMagicItem } from "../types/dnd-api-types";

export interface MagicItem extends ApiMagicItem {
  category?: string;
  description?: string[];
}
