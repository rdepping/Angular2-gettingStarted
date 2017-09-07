import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule} from '@angular/router';

import { AppComponent }  from './app.component';
import { ProductListComponent }  from './products/product-list.component';
import { ConvertToSpacesPipe }  from './shared/convert-to-spaces';
import { StarComponent }  from './shared/star.component';
import { ProductDetailComponent } from './products/product-detail.component';
import { WelcomeComponent } from './home/welcome.component';

@NgModule({
  imports: [ BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([], {useHash: true}) ],
  declarations: [
    AppComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent,
    WelcomeComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
