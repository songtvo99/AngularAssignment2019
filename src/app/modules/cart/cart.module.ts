import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// app modules
import { CartRoutingModule } from '@modules/cart/cart-routing.module';
import { UiToolbarModule } from '@modules/ui-toolbar/ui-toolbar.module';

// app components
import { CartListComponent } from '@components/cart-list/cart-list.component';

@NgModule({
  declarations: [CartListComponent],
  imports: [
    CommonModule,
    CartRoutingModule,
    UiToolbarModule
  ]
})
export class CartModule { }
