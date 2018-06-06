import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from "@angular/forms";

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
import { AddCandidateComponent } from './components/add-candidate/add-candidate.component';

//Services imports
import { CandidatesService } from './services/candidates.service';
import { HomeComponent } from './components/home/home.component';

const appRoutes: Routes = [
  {path:'', component:HomeComponent},
  {path:'register', component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'dashboard', component:DashboardComponent},
  {path:'add-candidate', component:AddCandidateComponent}
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
    CandidatesComponent,
    AddCandidateComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [
    CandidatesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
