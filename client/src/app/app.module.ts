import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { FilesComponent } from './components/files/files.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AddFileComponent } from './components/add-file/add-file.component';
import { EditFileComponent } from './components/edit-file/edit-file.component';
import { FileDetailsComponent } from './components/file-details/file-details.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from '../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule, BUCKET } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    FilesComponent,
    SidebarComponent,
    AddFileComponent,
    EditFileComponent,
    FileDetailsComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase, 'clientpanel'),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
  ],
  providers: [{ provide: BUCKET, useValue: 'my-bucket-name' }],
  bootstrap: [AppComponent],
})
export class AppModule {}
