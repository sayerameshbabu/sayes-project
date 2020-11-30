import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatRadioModule} from '@angular/material/radio';

import { CourseActivityRoutingModule } from './course-activity-routing.module';
import { CourseActivityComponent } from './course-activity.component';
import { ResourcesComponent } from './resources/resources.component';
import { AssignmentsComponent } from './assignments/assignments.component';
import { ProjectsComponent } from './projects/projects.component';
import { DiscussionComponent } from './discussion/discussion.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CourseInfoComponent } from './course-info/course-info.component';


@NgModule({
  declarations: [
    CourseActivityComponent,
    ResourcesComponent,
    AssignmentsComponent,
    ProjectsComponent,
    DiscussionComponent,
    FeedbackComponent,
    CourseInfoComponent],
  imports: [
    CommonModule,
    NgbModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    CourseActivityRoutingModule
  ]
})
export class CourseActivityModule { }
