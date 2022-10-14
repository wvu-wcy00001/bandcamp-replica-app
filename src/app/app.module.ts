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
import { JobEntryComponent } from './static_routes/jobs/jobs-section/job-category/job-entry/job-entry.component';
import { JobCategoryComponent } from './static_routes/jobs/jobs-section/job-category/job-category.component';
import { JobsSectionComponent } from './static_routes/jobs/jobs-section/jobs-section.component';
import { CopyrightSectionComponent } from './static_routes/copyright/copyright-section/copyright-section.component';
import { CounteringProcedureComponent } from './static_routes/copyright/copyright-section/copyright-procedures/countering-procedure/countering-procedure.component';
import { ServeProcedureComponent } from './static_routes/copyright/copyright-section/copyright-procedures/serve-procedure/serve-procedure.component';
import { ClaimsProcedureComponent } from './static_routes/copyright/copyright-section/copyright-procedures/claims-procedure/claims-procedure.component';
import { CopyrightProceduresComponent } from './static_routes/copyright/copyright-section/copyright-procedures/copyright-procedures.component';

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
    JobEntryComponent,
    JobCategoryComponent,
    JobsSectionComponent,
    CopyrightSectionComponent,
    CounteringProcedureComponent,
    ServeProcedureComponent,
    ClaimsProcedureComponent,
    CopyrightProceduresComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
