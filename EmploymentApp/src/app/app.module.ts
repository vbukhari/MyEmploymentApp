import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

//Angular Fire Imports
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
//import { AngularFireDatabase } from 'angularfire2/database';
//import { AngularFireAuth } from 'angularfire2/auth';

//Components imports
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { SettingsComponent } from './components/settings/settings.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CandidatesComponent } from './components/candidates/candidates.component';

//Services imports
//import { ClientService } from './services/client.service';

const appRoutes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent}
];

export const firebaseConfig = {
  apiKey: "AIzaSyCp_IpgG5P1ddicD_lvBjiaeaH27C3-sdk",
  authDomain: "employmentapp-7bab3.firebaseapp.com",
  databaseURL: "https://employmentapp-7bab3.firebaseio.com",
  storageBucket: "employmentapp-7bab3.appspot.com",
  messagingSenderId: "170965832108"
}

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    NavbarComponent,
    SidebarComponent,
    LoginComponent,
    RegisterComponent,
    SettingsComponent,
    PageNotFoundComponent,
    CandidatesComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    //ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
