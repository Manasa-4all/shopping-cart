import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { CustomdDirective } from './customd.directive';
import { TestPipe } from './test.pipe';

import {  RouterModule,Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ServicesService } from './services.service';

import { ProductsComponent } from './products/products.component';

import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { CartComponent } from './cart/cart.component';
import { ApiService } from './api.service';
import { CartService } from './cart.service';
import { FilterPipe } from './filter.pipe';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { Filter1Pipe } from './filter1.pipe';






@NgModule({
  declarations: [
    AppComponent,
    CustomdDirective,
    TestPipe,
    HeaderComponent,
    ProductsComponent,
    ProductListComponent,
    ProductCardComponent,
    CartComponent,
    FilterPipe,
    Filter1Pipe,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiService,CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
