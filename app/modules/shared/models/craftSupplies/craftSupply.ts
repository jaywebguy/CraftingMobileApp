import { CraftCategory } from "../craftCategories/craftCategory";

export class CraftSupply {
    craftSupplyId: string;
    title: string;
    description: string;
    upc: string;
    image: string;
    craftCategory : CraftCategory;    
}