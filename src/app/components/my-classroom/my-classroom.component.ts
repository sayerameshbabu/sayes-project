import { Component, OnInit } from '@angular/core';
import { OsacadService } from '../../services/osacad.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { AppService } from '../../shared/services/app.service';
import { ApexService } from '../../shared/services/apex.service';

@Component({
  selector: 'app-my-classroom',
  templateUrl:'./my-classroom.component.html',
  styleUrls: ['./my-classroom.component.scss']
})
export class MyClassroomComponent implements OnInit {

  constructor(private service: OsacadService, private router: Router, private toastrService: ToastrService, private appService: AppService,
    private apexService: ApexService,
    ) { }
  programs: any[];
  ngOnInit(): void {
    this.getOrders();
  }
  getOrders() {
    this.service.getProgramsByStudentId().subscribe((res) => {
      if(res['status'] == 200) {
        this.programs = res['body'];
      }
    }, err => {
      if (err.status == 401) {
        this.apexService.showLoader(false);
        this.appService.navigate('/auth/login', null);
      }
    });
  }
  goTo(a) {
    if(a['status'] == 'not_assigned') {
      this.toastrService.success('Course will start soon. Any queries, please contact Admin --  6304982305');
    }else if(a['status'] == 'suspended') {
      this.toastrService.error('Course is suspended. Any queries, please contact Admin -- 6304982305');
    }else {
      this.router.navigateByUrl(`/course-activity/${a['progressId']}/course-info`)
    }
  }

}
