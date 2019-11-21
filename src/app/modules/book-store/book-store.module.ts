import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// app modules
import { BookStoreRoutingModule } from '@modules/book-store/book-store-routing.module';
import { UiToolbarModule } from '@modules/ui-toolbar/ui-toolbar.module';
import { MaterialModule } from '@modules/material/material.module';

// app components
import { BookListComponent } from '@components/book-list/book-list.component';
import { BookDetailComponent } from '@components/book-detail/book-detail.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BookContainerComponent } from '../../components/book-container/book-container.component';

@NgModule({
  declarations: [BookListComponent, BookDetailComponent, BookContainerComponent],
  imports: [
    CommonModule,
    BookStoreRoutingModule,
    UiToolbarModule,
    FlexLayoutModule,
    MaterialModule
  ]
})
export class BookStoreModule { }
