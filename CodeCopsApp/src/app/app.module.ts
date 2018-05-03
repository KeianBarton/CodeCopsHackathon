import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { ReportsComponent } from './reports/reports.component';
import { ReportDetailsComponent } from './reports/report-details/report-details.component';
import { NotesComponent } from './reports/report-details/notes/notes.component';
import { LocationComponent } from './reports/report-details/location/location.component';
import { PhotosComponent } from './reports/report-details/photos/photos.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { ProfileModalComponent } from './shared/modal/profile-modal/profile-modal.component';
import { DeleteModalComponent } from './shared/modal/delete-modal/delete-modal.component';
import { LoginService } from './login/login.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ReportsComponent,
    ReportDetailsComponent,
    NotesComponent,
    LocationComponent,
    PhotosComponent,
    NavBarComponent,
    ProfileModalComponent,
    DeleteModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
