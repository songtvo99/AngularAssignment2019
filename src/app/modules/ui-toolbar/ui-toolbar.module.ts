import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { MaterialModule } from '@modules/material/material.module';
import { RouterModule } from '@angular/router';
import { RouterContainerComponent } from '@components/router-container/router-container.component';
import { PageNotFoundComponent } from '../../components/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HeaderComponent,
    RouterContainerComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule
  ],
  exports: [
    HeaderComponent,
    RouterContainerComponent
  ]
})
export class UiToolbarModule { }
