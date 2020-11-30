import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ProgramsComponent } from '../components/programs/programs.component';
import { ProgramInfoComponent } from '../components/program-info/program-info.component';
import { OrderDetailsComponent } from '../components/order-details/order-details.component';
import { MyClassroomComponent } from '../components/my-classroom/my-classroom.component';
import { OrderConfirmComponent } from '../components/order-confirm/order-confirm.component';
import { JoinClassComponent } from '../components/join-class/join-class.component';

import { EditProfileComponent } from '../components/profile/edit-profile/edit-profile.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { ChangePasswordComponent } from '../components/profile/change-password/change-password.component';
import { InvoicesComponent } from '../components/profile/invoices/invoices.component';
import { CertificateComponent } from '../components/profile/certificate/certificate.component';
import { VerifyCertificateComponent } from '../components/profile/verify-certificate/verify-certificate.component';

const routes: Routes = [
  {path: 'programs', component: ProgramsComponent},
  {path: 'programInfo', component: ProgramInfoComponent},
  {path: 'orderDetails', component: OrderDetailsComponent},
  {path: 'myClassroom', component: MyClassroomComponent},
  {path: 'orderConfirmation', component: OrderConfirmComponent},
  {path: 'joinClass', component: JoinClassComponent},
  {
    path: 'profile', component: ProfileComponent, children: [
      { path: '', redirectTo: 'edit-profile', pathMatch: 'full' },
      {path: 'certificate', component: CertificateComponent},
      {path: 'change-password', component: ChangePasswordComponent},
      {path: 'edit-profile', component: EditProfileComponent},
      {path: 'invoices', component: InvoicesComponent},
      {path: 'verifyCertificate', component: VerifyCertificateComponent},
    ]
  },
  {
    path: 'course-activity',
    loadChildren: () => import('../components/course-activity/course-activity.module').then(m => m.CourseActivityModule)
  }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  exports: [RouterModule]
})
export class OSAcadRoutingModule { }
