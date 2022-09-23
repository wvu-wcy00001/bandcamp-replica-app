import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderNavbarComponent } from './header/navbar/navbar.component';
import { FooterNavbarComponent } from './footer/navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { LowerComponent } from './content/lower/lower.component';
import { FactoidComponent } from './content/lower/factoid/factoid.component';
import { EmailIntakeComponent } from './content/lower/email-intake/email-intake.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderNavbarComponent,
    FooterNavbarComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LowerComponent,
    FactoidComponent,
    EmailIntakeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
