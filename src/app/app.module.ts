import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './share/header/header.component';
import { FooterComponent } from './share/footer/footer.component';
import { ContentComponent } from './static_routes/home/content/content.component';
import { FactoidComponent } from './static_routes/home/content/factoid/factoid.component';
import { EmailIntakeComponent } from './static_routes/home/content/email-intake/email-intake.component';
import { NewnotableComponent } from './static_routes/home/content/newnotable/newnotable.component';
import { NncardComponent } from './static_routes/home/content/newnotable/nncard/nncard.component';
import { AdminRoute } from './static_routes/admin/admin.route';
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
import { LivestreamsComponent } from './static_routes/home/content/livestreams/livestreams.component';
import { LscardComponent } from './static_routes/home/content/livestreams/lscard/lscard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
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
    LivestreamsComponent,
    LscardComponent,
    AdminRoute,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
