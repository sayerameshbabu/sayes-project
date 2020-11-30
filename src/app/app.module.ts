import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './components/auth/auth.module';
import { OsacadModule } from './modules/osacad.module';
import { CourseActivityModule } from './components/course-activity/course-activity.module';
import { AppRoutingModule } from './routes/app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/common/nav-bar/nav-bar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JoinClassComponent } from './components/join-class/join-class.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    JoinClassComponent,
  ],
  imports: [
    BrowserModule,
    ToastrModule.forRoot({positionClass: 'toast-top-center', timeOut: 1500}),
    SharedModule,
    AuthModule,
    OsacadModule,
    MatRadioModule,
    // CourseActivityModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
