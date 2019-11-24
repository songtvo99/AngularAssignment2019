import { CartContainerComponent } from "./../../components/cart-container/cart-container.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

// app components
import { RouterContainerComponent } from "@components/router-container/router-container.component";
import { CartListComponent } from "@components/cart-list/cart-list.component";

const routes: Routes = [
  {
    path: "",
    component: RouterContainerComponent,
    children: [{ path: "", component: CartContainerComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}
