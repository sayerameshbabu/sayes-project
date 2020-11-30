import { Component, OnInit } from '@angular/core';
import { OsacadService } from '../../../services/osacad.service';
import { ToastrService } from 'ngx-toastr';
import { AppService } from '../../../shared/services/app.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-verify-certificate',
  templateUrl: './verify-certificate.component.html',
  styleUrls: ['./verify-certificate.component.scss']
})
export class VerifyCertificateComponent implements OnInit {
  public errorMessage: string = "500 SERVER ERROR, CONTACT ADMINISTRATOR!!!!";
  vcForm: FormGroup;
  certificate: any;
  constructor(
    private restService: OsacadService,
    private toastr: ToastrService,
    private appService: AppService,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.createVCForm();
  }
  createVCForm() {
    this.vcForm = this.formBuilder.group({
      file: [null, Validators.required],
      id: [null, Validators.required],
    });
  }
  verifyCertificate() {
    console.log('This.Certificate is >>>>>>>>> ',this.certificate, this.vcForm.value.id);
    this.restService.verifyCertificate(this.certificate, this.vcForm.value.id).subscribe(
      (response: any) => {
        if (response && response.status === 200 && response.body.data) {
          this.toastr.success(response.body.data, null, {
            disableTimeOut:true,
            closeButton: true
          });
        } else {
          this.toastr.error("Failed To Verify, Please Upload Correct Certificate", null, {
            disableTimeOut:true,
            closeButton: true
          });
        }
      },(error) => {
        this.toastr.error(this.errorMessage, null, {
          disableTimeOut:true,
          closeButton: true
        }); 
      });
  }
  getFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.certificate = event.target.files[0];
    }
  }
}
