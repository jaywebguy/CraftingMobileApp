import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { User } from "../models/users/user";
import { CraftCategory } from "../models/craftCategories/craftCategory";
import { CRAFTCATEGORIES } from "../mockData/mock-craftcategories";
import { Config } from "../../Config";


@Injectable()

export class CategoriesListService{
    constructor(private http: Http){

    }

    get( ): Promise<Array<CraftCategory>>
    {
        //user:User 
        //let craftcategories = new Array<CraftCategory>();
        //return craftcategories;
        return Promise.resolve(CRAFTCATEGORIES);
    }
}