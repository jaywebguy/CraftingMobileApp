import { CraftSupply } from "../CraftSupplies/CraftSupply";

export class User {
    userId: string;
    firstName: string;
    lastName: string;
    email: string;
    userName: string;
    password: string;
    craftsupplies : Array<CraftSupply>;
}