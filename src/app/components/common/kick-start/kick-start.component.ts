import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../shared/services/app.service';
import { OsacadService } from '../../../services/osacad.service';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'dl-kick-start',
  templateUrl: './kick-start.component.html',
  styleUrls: ['./kick-start.component.scss']
})
export class KickStartComponent implements OnInit {
  programInfo: any = {};
  constructor(private appService: AppService, private osacadService: OsacadService, private commonService: CommonService) { }

  ngOnInit() {
    this.findProgramById();
  }
  joinNow() {
    this.commonService.selectedProgram = this.programInfo;
    this.appService.navigate('/orderDetails', null);
  }
  findProgramById() {
    const programId = this.appService.getParam('id');
    if (programId) {
      this.osacadService.findProgramById(programId).subscribe(
        (response) => {
          if (response.status == 200) {
            this.programInfo = response['body'];
          }
        },
        (error) => {
          if (error.status == 404) {
            this.appService.navigate('/programs', null);
          }
        });
    }
  }
}
