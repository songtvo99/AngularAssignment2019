import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '@components/header/header.component';
import { PageNotFoundComponent } from '@components/page-not-found/page-not-found.component';
import { MaterialModule } from '@modules/material/material.module';
import { RouterContainerComponent } from '@components/router-container/router-container.component';
import { RouterModule } from '@angular/router';
import { AppListItemComponent } from '@components/app-list-item/app-list-item.component';

@NgModule({
  declarations: [HeaderComponent, PageNotFoundComponent, RouterContainerComponent, AppListItemComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    PageNotFoundComponent,
    RouterContainerComponent
  ]
})
export class SharedComponentsModule { }
