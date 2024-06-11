import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { HomeComponent } from './home/home.component';
import { FilterComponent } from './filter/filter.component';
import { CatalogComponent } from './catalog/catalog.component';
import { ItemComponent } from './item/item.component';


const routes: Routes = [
    {path: 'home', component: HomeComponent},
    {path: 'filter', component: FilterComponent},
    {path: 'item/:id', component: ItemComponent}, 
    {path: '**', component: CatalogComponent }
]

@NgModule({
    imports:[RouterModule.forRoot(routes),],
    exports:[RouterModule]
})

export class RoutingModule{}
  