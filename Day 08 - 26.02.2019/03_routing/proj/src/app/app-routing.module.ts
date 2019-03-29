import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ProductsComponent } from './products/products.component';
import { ClothComponent } from './cloth/cloth.component';
import { FoodComponent } from './food/food.component';

const routes: Routes = [
  {path:"home", component: HomeComponent},
  {path:"contact", component: ContactComponent},
  {path:"products/food", component: FoodComponent},
  {path:"products", component:  ProductsComponent, children:[
    {path:"cloth", component: ClothComponent}
  ]},
  {path:"", redirectTo:"/home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
