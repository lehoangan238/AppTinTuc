import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import {NewsApiService} from "./Service/news-api.service";
import {HeaderComponent} from "./header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule} from "@angular/forms";
import {DomesticComponent} from "./domestic/domestic.component";
import {NgxPaginationModule} from "ngx-pagination";
import {FooterComponent} from "./footer/footer.component";
import {ForeignComponent} from "./foreign/foreign.component";
import {ScrollToTopComponent} from "./scroll-to-top/scroll-to-top.component";
import {ListNewsSearchComponent} from "./list-news-search/list-news-search.component";
import {NewsDetailComponent} from "./news-detail/news-detail.component";
import {SearchComponent} from "./search/search.component";
import {RightCateloryComponent} from "./right-catelory/right-catelory.component";
import {CommentComponent} from "./comment/comment.component";
import {UnionComponent} from "./union/union.component";
import {YouReadComponent} from "./you-read/you-read.component";
import {HeaderMobileComponent} from "./header-mobile/header-mobile.component";
import {FooterMobileComponent} from "./footer-mobile/footer-mobile.component";
import {Ng2SearchPipeModule} from "ng2-search-filter";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    DomesticComponent,
    ForeignComponent,
    ScrollToTopComponent,
    ListNewsSearchComponent,
    SearchComponent,
    NewsDetailComponent,
    RightCateloryComponent,
    CommentComponent,
    UnionComponent,
    YouReadComponent,
    HeaderMobileComponent,
    FooterMobileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
