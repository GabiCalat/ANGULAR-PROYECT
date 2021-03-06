import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MessageService } from './services/message/message.service';
import { ProductsService } from './services/products/products.service';
import { HttpClientModule } from '@angular/common/http';
import { FooterLinkComponent } from './components/footer/components/footer-link/footer-link.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    FooterLinkComponent
  ],
  providers:[
    MessageService,
    ProductsService

  ],

  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule
  ],

  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule { }
