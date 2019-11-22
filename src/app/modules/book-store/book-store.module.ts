import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// app modules
import { BookStoreRoutingModule } from '@modules/book-store/book-store-routing.module';
import { MaterialModule } from '@modules/material/material.module';
import { SharedComponentsModule } from '@modules/shared-components/shared-components.module';

// app components
import { BookListComponent } from '@components/book-list/book-list.component';
import { BookDetailComponent } from '@components/book-detail/book-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookstoreContainerComponent } from '@components/bookstore-container/bookstore-container.component';


@NgModule({
  declarations: [
    BookListComponent,
    BookDetailComponent,
    BookstoreContainerComponent
  ],
  imports: [
    CommonModule,
    BookStoreRoutingModule,
    SharedComponentsModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class BookStoreModule { }
