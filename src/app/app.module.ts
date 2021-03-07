import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/welcome/login/login.component';
import { SignupComponent } from './components/welcome/signup/signup.component';
import { PageNotFoundComponent } from './components/error-pages/page-not-found/page-not-found.component';
import { MapsComponent } from './components/maps/maps.component';
import { GridComponent } from './components/maps/grid/grid.component';
import { PatchNotesComponent } from './components/welcome/versioning/patch-notes/patch-notes.component';
import { SidebarMenuComponent } from './components/maps/sidebar-menu/sidebar-menu.component';
import { TokenComponent } from './components/maps/grid/token/token.component';
import { TokenListComponent } from './components/maps/sidebar-menu/token-list/token-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    SignupComponent,
    PageNotFoundComponent,
    MapsComponent,
    GridComponent,
    PatchNotesComponent,
    SidebarMenuComponent,
    TokenComponent,
    TokenListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
