import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './static_routes/home/content/content.component';
import { LowerComponent } from './static_routes/home/content/lower/lower.component';
import { FactoidComponent } from './static_routes/home/content/lower/factoid/factoid.component';
import { EmailIntakeComponent } from './static_routes/home/content/lower/email-intake/email-intake.component';
import { NewnotableComponent } from './static_routes/home/content/lower/newnotable/newnotable.component';
import { NncardComponent } from './static_routes/home/content/lower/newnotable/nncard/nncard.component';
import { TermsRoute } from './static_routes/terms/terms.route';
import { FtmpRoute } from './static_routes/ftmp/ftmp.route';
import { JobsRoute } from './static_routes/jobs/jobs.route';
import { PrivacyRoute } from './static_routes/privacy/privacy.route';
import { CopyrightRoute } from './static_routes/copyright/copyright.route';
import { HomeRoute } from './static_routes/home/home.route';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    LowerComponent,
    FactoidComponent,
    EmailIntakeComponent,
    NewnotableComponent,
    NncardComponent,
    TermsRoute,
    FtmpRoute,
    JobsRoute,
    PrivacyRoute,
    CopyrightRoute,
    HomeRoute,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
