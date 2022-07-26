import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { ConfirmationComponent } from './component/confirmation/confirmation.component';
import { ProductItemDetailComponent } from './component/product-item-detail/product-item-detail.component';
import { ProductListComponent } from './component/product-list/product-list.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'cart',component:CartComponent},
  {path:'confirmation',component:ConfirmationComponent},
  {path:'detail',component:ProductItemDetailComponent},
  {path:'**',redirectTo:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
