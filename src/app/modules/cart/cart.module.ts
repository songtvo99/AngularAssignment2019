import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// app modules
import { CartRoutingModule } from '@modules/cart/cart-routing.module';
import { SharedComponentsModule } from '@modules/shared-components/shared-components.module';

// app components
import { CartListComponent } from '@components/cart-list/cart-list.component';

@NgModule({
  declarations: [CartListComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    SharedComponentsModule
  ]
})
export class CartModule { }
