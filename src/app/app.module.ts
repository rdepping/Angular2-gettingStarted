import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import { ConvertToSpacesPipe }  from './shared/convert-to-spaces';
import { StarComponent }  from './shared/star.component';

@NgModule({
  imports: [ BrowserModule, FormsModule, HttpModule ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
