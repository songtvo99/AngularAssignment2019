import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App modules
import { AppRoutingModule } from '@app/app-routing.module';
import { HomeModule } from '@modules/home/home.module';
import { MaterialModule } from '@modules/material/material.module';
import { UiToolbarModule } from '@modules/ui-toolbar/ui-toolbar.module';
import { CoreDataModule } from '@modules/core-data/core-data.module';

// Components
import { AppComponent } from '@app/app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiToolbarModule,
    CoreDataModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
