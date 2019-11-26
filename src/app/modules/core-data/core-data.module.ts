import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonService } from '@services/common.service';
import { BookService } from '@services/book.service';
import { CartService } from '@services/cart.service';
import { UserService } from '@app/services/user.service';
import { ErrorInterceptorService } from '@services/error-interceptor.service';
import { JwtInterceptorService } from '@services/jwt-interceptor.service';
import { AuthenticationService } from '@services/authentication.service';
import { MaterialModule } from '@modules/material/material.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, HttpClientModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: JwtInterceptorService,
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorInterceptorService,
      multi: true
    },
    CommonService,
    UserService,
    BookService,
    AuthenticationService,
    CartService,
    MaterialModule
  ]
})
export class CoreDataModule {}
