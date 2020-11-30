import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ProfileComponent } from './profile.component';
import {CertificateComponent } from './certificate/certificate.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import {InvoicesComponent } from './invoices/invoices.component'

const routes: Routes = [
  {
    path: '', component: ProfileComponent, children: [
      {path: 'certificate', component: CertificateComponent},
      {path: 'change-password', component: ChangePasswordComponent},
      {path: 'edit-profile', component: EditProfileComponent},
      {path: 'invoices', component: InvoicesComponent},
      { path: '**', redirectTo: 'edit-profile' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
