import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// app components
import { RouterContainerComponent } from '@components/router-container/router-container.component';
import { BookListComponent } from '@components/book-list/book-list.component';
import { BookDetailComponent } from '@components/book-detail/book-detail.component';

const routes: Routes = [
  { path: '',
    component: RouterContainerComponent,
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
