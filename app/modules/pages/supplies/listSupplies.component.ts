import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { CategoriesListService } from "../../shared/services/categories-list.service";
import { CraftCategory } from "../../shared/models/craftCategories/craftCategory";

@Component({
  selector: 'listSupplies',
  templateUrl: 'modules/pages/supplies/list-supplies.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CategoriesListService]
})
export class listSuppliesComponent implements OnInit {
  constructor(private categoryService: CategoriesListService){
    
  }

  text: string = 'List Supplies Page';
  craftCategories:Array<CraftCategory>;

  ngOnInit(){
    this.loadCategories();
  }

  loadCategories(): void{
    this.categoryService.get().then(categories => this.craftCategories = categories);    
  }
}
