import { MaterialModule } from '@modules/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// app modules
import { CartRoutingModule } from '@modules/cart/cart-routing.module';
import { SharedComponentsModule } from '@modules/shared-components/shared-components.module';

// app components
import { CartListComponent } from '@components/cart-list/cart-list.component';
import { CartContainerComponent } from '../../components/cart-container/cart-container.component';

@NgModule({
  declarations: [CartListComponent, CartContainerComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedComponentsModule,
    MaterialModule
  ]
})
export class CartModule { }
