import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { CommonService } from '@services/common.service';
import { BookService } from '@services/book.service';
import { UserService } from '@services/user.service';
import { CartService } from '@services/cart.service';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    CommonService,
    BookService,
    UserService,
    CartService,
    MaterialModule
  ]
})
export class CoreDataModule { }
