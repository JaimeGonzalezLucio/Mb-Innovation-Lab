import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InfoComponent } from './TransformacionDigital/shared/components/info/info.component';
import { DetailsComponent } from './TransformacionDigital/shared/components/details/details.component';
import { FormComponent } from './TransformacionDigital/shared/components/form/form.component';
import { FooterComponent } from './TransformacionDigital/shared/components/footer/footer.component';
import { AboutComponent } from './TransformacionDigital/shared/components/about/about.component';
import { BannerComponent } from './TransformacionDigital/shared/components/banner/banner.component';
import { CardPrincipalComponent } from './TransformacionDigital/shared/components/card-principal/card-principal.component';
import { HeaderComponent } from './TransformacionDigital/shared/components/header/header.component';
import { CardComponent } from './API_TEST/shared/components/card/card.component';
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,        
    InfoComponent,
    DetailsComponent,
    FormComponent,
    FooterComponent,
    AboutComponent,
    BannerComponent,
    CardPrincipalComponent,
    HeaderComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],  
})
export class AppModule { }
