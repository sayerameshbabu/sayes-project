import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToastrModule } from 'ngx-toastr';
import { SharedModule } from '../shared/shared.module';
import { OSAcadRoutingModule } from '../routes/osacad-routing.module';

import { ProgramsComponent } from '../components/programs/programs.component';
import { ProgramInfoComponent } from '../components/program-info/program-info.component';
import { OrderDetailsComponent } from '../components/order-details/order-details.component';
import { FaqComponent } from '../components/common/faq/faq.component';
import { FeedbackComponent } from '../components/common/feedback/feedback.component';
import { KickStartComponent } from '../components/common/kick-start/kick-start.component';
import { OurPartnersComponent } from '../components/common/our-partners/our-partners.component';
import { HiringPartnersComponent } from '../components/common/hiring-partners/hiring-partners.component';
import { MyClassroomComponent } from '../components/my-classroom/my-classroom.component';
import { OrderConfirmComponent } from '../components/order-confirm/order-confirm.component';

import {ProgressBarModule} from 'angular-progress-bar';
import { EditProfileComponent } from '../components/profile/edit-profile/edit-profile.component';
import { ProfileComponent } from '../components/profile/profile.component';
import { ChangePasswordComponent } from '../components/profile/change-password/change-password.component';
import { InvoicesComponent } from '../components/profile/invoices/invoices.component';
import { CertificateComponent } from '../components/profile/certificate/certificate.component';
import { VerifyCertificateComponent } from '../components/profile/verify-certificate/verify-certificate.component';

@NgModule({
  declarations: [
    ProgramsComponent,
    ProgramInfoComponent,
    OrderDetailsComponent,
    FaqComponent,
    FeedbackComponent,
    KickStartComponent,
    OurPartnersComponent,
    HiringPartnersComponent,
    MyClassroomComponent,
    OrderConfirmComponent,
    EditProfileComponent,
    ProfileComponent,
    ChangePasswordComponent,
    InvoicesComponent,
    CertificateComponent,
    VerifyCertificateComponent
  ],
  imports: [
    CommonModule,
    ToastrModule.forRoot({positionClass: 'toast-top-center', timeOut: 2000}),
    SharedModule,
    ProgressBarModule,
    OSAcadRoutingModule
  ]
})
export class OsacadModule { }
