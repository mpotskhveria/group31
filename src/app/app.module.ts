import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FilterComponent } from './filter/filter.component';
import { CatalogComponent } from './catalog/catalog.component';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { ItemComponent } from './item/item.component';
import { RoutingModule } from './routing.module';


const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'filter', component: FilterComponent},
  {path: 'item/:id', component: ItemComponent}, 
  {path: '**', component: CatalogComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FilterComponent,
    CatalogComponent,
    NavbarComponent,
    ItemComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
