import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// app components
import { BookListComponent } from '@components/book-list/book-list.component';
import { BookDetailComponent } from '@components/book-detail/book-detail.component';
import { BookstoreContainerComponent } from '@app/components/bookstore-container/bookstore-container.component';

const routes: Routes = [
  { path: '',
    component: BookstoreContainerComponent,
    children: [
      {
        path: ':id/detail',
        component: BookDetailComponent
      },
      {
        path: '',
        component: BookListComponent
      }
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookStoreRoutingModule { }
