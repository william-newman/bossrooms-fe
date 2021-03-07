import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/error-pages/page-not-found/page-not-found.component';
import { MapsComponent } from './components/maps/maps.component';
import { LoginComponent } from './components/welcome/login/login.component';
import { SignupComponent } from './components/welcome/signup/signup.component';
import { PatchNotesComponent } from './components/welcome/versioning/patch-notes/patch-notes.component';
import { WelcomeComponent } from './components/welcome/welcome.component';

const WELCOME_URI = "welcome";
const MAPS_URI = "maps";
const LOGIN_URI = "login";
const SIGNUP_URI = "signup";
const PATCH_NOTES_URI = "patch_notes";
const SETTINGS_URI = "settings";

const routes: Routes = [
  { path: WELCOME_URI, component: WelcomeComponent },
  { path: '', redirectTo: MAPS_URI, pathMatch: 'full' },
  {
    path: MAPS_URI,
    component: MapsComponent,
    // canActivate: [AuthorizationService]
  },
  {
    path: SIGNUP_URI,
    component: SignupComponent,
    // canActivate: [true]
  },
  {
    path: LOGIN_URI,
    component: LoginComponent,
    // canActivate: [true]
  },
  { path: PATCH_NOTES_URI, component: PatchNotesComponent },
  // {
  //   path: SETTINGS_URI,
  //   component: ProfileSettingsComponent,
  //   canActivate: [AuthGuardService]
  // },
  { path: '**', component: PageNotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
