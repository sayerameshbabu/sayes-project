import { Component, OnInit } from '@angular/core';
import { OsacadService } from '../../../services/osacad.service';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../../shared/services/app.service';
import { ApexService } from '../../../shared/services/apex.service';

@Component({
  selector: 'app-certificate',
  templateUrl: './certificate.component.html',
  styleUrls: ['./certificate.component.scss']
})
export class CertificateComponent implements OnInit {
  // public errorMessage: string = "500 SERVER ERROR, CONTACT ADMINISTRATOR!!!!";
  certificates: any = [];
  constructor(private osacadService: OsacadService, private toastr: ToastrService, private appService: AppService, private apexService: ApexService,
    ) { }

  ngOnInit(): void {
    // this.getCertificates();
  }
  generate(certificate: any) {
    if (certificate && certificate.courseId && certificate.progress === "100") {
      this.osacadService.generateCertificate({courseId: certificate.courseId}).subscribe(
        (response: any) => {
          console.log("Response We got is ",response);
          if (response && response.status === 200 && response.body) {
            this.toastr.success('Finished course successfully', null, {
              disableTimeOut:true,
              closeButton: true
            });
          } else {
            this.toastr.error('Certificate Already Generated', null, {
              disableTimeOut:true,
              closeButton: true
            });
          }
        },(error) => {
          this.toastr.error(error.error, null, {
            disableTimeOut:true,
            closeButton: true
          }); 
        });
    } else {
      this.toastr.error('Please Complete Course First!!');
    }
  }
  getCertificates() {
    this.osacadService.getCertificates().subscribe(
      (response: any) => {
        if (response && response.status === 200 && response.body.certificates) {
          this.certificates = response.body.certificates;
        }
      }, err => {
        if (err.status == 401) {
          this.apexService.showLoader(false);
          this.appService.navigate('/auth/login', null);
        }
      });
  }
  downloadCertificate(certificate) {
    if (certificate && certificate.certificateLink) {
      window.location.href = certificate.certificateLink;
    } else {
      this.toastr.error('No certificate found, Please try again later');
    }
  }
  verify() {
    this.appService.navigate('/profile/verifyCertificate');
  }

}
