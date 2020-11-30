import { Component, OnInit, NgZone } from '@angular/core';
import { OsacadService } from '../../services/osacad.service';
import { AppService } from '../../shared/services/app.service';
import { CommonService } from '../../services/common.service';
import { Router } from '@angular/router';
import { ApexService } from '../../shared/services/apex.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-order-confirm',
  templateUrl: './order-confirm.component.html',
  styleUrls: ['./order-confirm.component.scss']
})
export class OrderConfirmComponent implements OnInit {
  courses: any = [];
  programInfo: any = {};
  courseProgressId: any;
  constructor(
    private service: OsacadService,
    private appService: AppService,
    private commonService: CommonService,
    private router: Router,
    private apexService: ApexService,
    private ngZone: NgZone,
    private toastService: ToastrService
  ) { }

  ngOnInit(): void {
    this.programInfo = this.commonService.selectedProgram;
    if (!(this.programInfo && Object.keys(this.programInfo).length)) {
      this.router.navigate(['/programs']);
    }
    this.getOrders();
  }
  redirectToCourse() {
    this.ngZone.run(() => this.router.navigate([`/course-activity/${this.courseProgressId}/course-info`]).then());
  }
  redirectToPrograms() {
    this.ngZone.run(() => this.router.navigate(['/programs']).then());
  }
  getOrders() {
    this.service.getProgramsByStudentId().subscribe((res) => {
      if(res['status'] == 200) {
      }
    }, err => {
      if (err.status == 401) {
        this.apexService.showLoader(false);
        this.appService.navigate('/auth/login', null);
      }
    });
  }
  redirectToClassroom() {
    this.ngZone.run(() => this.router.navigate(['/myClassroom']).then());
  }
  goTo(a) {
    this.toastService.success('Course will start soon. Any queries, please contact Admin --  6304982305');
  }
}
