import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TermsRoute } from './static_routes/terms/terms.route';
import { PrivacyRoute } from './static_routes/privacy/privacy.route';
import { FtmpRoute } from './static_routes/ftmp/ftmp.route';
import { CopyrightRoute } from './static_routes/copyright/copyright.route';
import { JobsRoute } from './static_routes/jobs/jobs.route';
import { HomeRoute } from './static_routes/home/home.route';
import { AdminRoute } from './static_routes/admin/admin.route';
import { LoginRoute } from './static_routes/login/login.route';
import { SignupRoute } from './static_routes/signup/signup.route';

const routes: Routes = [
    { path: '', component: HomeRoute },
    { path: 'terms_of_use', component: TermsRoute },
    { path: 'privacy', component: PrivacyRoute },
    { path: 'fair_trade_music_policy', component: FtmpRoute },
    { path: 'copyright', component: CopyrightRoute },
    { path: 'jobs', component: JobsRoute },
    { path: 'admin', component: AdminRoute },
    { path: 'login', component: LoginRoute },
    { path: 'signup', component: SignupRoute }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
