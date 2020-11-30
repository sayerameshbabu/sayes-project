import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OsacadService } from '../../../services/osacad.service';
import { CommonService } from '../../../services/common.service';
import { AppService } from '../../../shared/services/app.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  programs: any = [];
  studentDetails: any = {};
  defaultImage: any = 'assets/images/user.png';
  constructor(
    private router: Router,
    private osacadService: OsacadService,
    private commonService: CommonService,
    private appService: AppService
    ) { }

  ngOnInit(): void {
    if (this.appService.getLocalItem('token')) {
      this.getOrders();
      this.getDetails();
      this.commonService.triggerDp.subscribe( data => {
        this.getDetails();
      });
    }
  }
  getDetails() {
    this.osacadService.getStudentDetails().subscribe(
      (response: any) => {
        if (response && response.status === 200) {
          this.studentDetails = response.body;
        }
      },
      (error) => {
      });
  }
  getOrders() {
    this.osacadService.getProgramsByStudentId().subscribe((res: any) => {
      if (res.status == 200) {
        this.programs = res.body;
      }
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/auth/login']);
  }

}
