import { CraftSupply } from "../craftSupplies/CraftSupply";

export class CraftCategory {
    craftCategoryId: string;
    title: string;
    description: string;
    image: string;
    craftsupplies : Array<CraftSupply>;    
}