import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AddFileComponent } from './components/add-file/add-file.component';
import { EditFileComponent } from './components/edit-file/edit-file.component';
import { FileDetailsComponent } from './components/file-details/file-details.component';

const routes: Routes = [
  { path: '', component: DashboardComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'file/add', component: AddFileComponent},
  { path: 'file/edit/:id', component: EditFileComponent},
  { path: 'file/:id', component: FileDetailsComponent},
]

@NgModule({
  exports: [RouterModule],
  imports: [
    RouterModule.forRoot(routes),
  ]
})
export class AppRoutingModule { }
