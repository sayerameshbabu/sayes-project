import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { OsacadService } from '../../services/osacad.service';
import { AppService } from '../../shared/services/app.service';
import { ToastrService } from 'ngx-toastr';
import { ApexService } from '../../shared/services/apex.service';
import { constants } from '../../constants/constants';
import { Router } from '@angular/router';
declare const Razorpay: any;

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.scss']
})
export class OrderDetailsComponent implements OnInit {
  program: any = {};
  totalPrice: any = 0;
  constructor(
    private commonService: CommonService,
    private osacadService: OsacadService,
    private toastr: ToastrService,
    private router: Router,
    private appService: AppService,
    private apexService: ApexService
  ) { }

  ngOnInit(): void {
    this.getEnrollProgram();
  }
  getEnrollProgram() {
    this.program = this.commonService.selectedProgram;
    if (!(this.program && Object.keys(this.program).length)) {
      this.router.navigate(['/programs']);
    } else {
      this.calculateTotalPrice();
    }
  }
  // proceedToApplyCoupon(event) {
  //   if (event.target.checked) {
  //     this.grandTotal = (this.program.price * (100 - this.program.coupon.couponPercentage)) / 100;
  //   } else {
  //     this.grandTotal = this.program.price;
  //   }
  // }
  proceedForPayment() {
    if (this.program) {
      const orderDetails = {
        courseId: this.program._id,
        totalPrice: this.calculateTotalPrice()
      };
      this.osacadService.createOrderId(orderDetails).subscribe(
        (response) => {
          this.redirectRazorPay(response);
        },
        (error) => {
          if (error.status == 401) {
            this.apexService.showLoader(false);
            this.appService.navigate('/auth/login', null);
          } else {
            this.toastr.error('Failed in payment, Please try again');
          }
        });
    }
  }
  redirectRazorPay(orderResponse) {
    const options = {
      key: constants.RAZOR_PAY_KEY,
      amount: (this.calculateTotalPrice() * 100),
      currency: constants.CURRENCY,
      name: constants.RAZORPAY_INPUT_NAME,
      description: constants.RAZORPAY_INPUT_DESCRIPTION,
      image: '',
      order_id: orderResponse.orderId,
      handler: (response) => {
        this.apexService.showLoader(true);
        this.saveOrderDetails(response);
      }
    };
    const rzp1 = new Razorpay(options);
    rzp1.open();
  }
  saveOrderDetails(razorPayResponse) {
    const orderDetails = {
      courseId: this.program._id,
      paymentId: razorPayResponse.razorpay_payment_id,
      totalPrice: this.calculateTotalPrice()
    };
    this.apexService.showLoader(true);
    this.osacadService.saveOrderDetails(orderDetails).subscribe(
      (response: any) => {
        if (response) {
          this.toastr.success('Successfully placed the order redirecting to courses');
          this.appService.navigate('/orderConfirmation', {id: 'done'});
        }
      },
      (error) => {
        if (error.status == 401) {
          this.apexService.showLoader(false);
          this.appService.navigate('/auth/login', null);
        } else {
          this.toastr.error('Failed in payment');
        }
      });
  }
  calculateTotalPrice() {
    this.totalPrice = this.program.price + ((this.program.price * 18 ) / 100);
    return this.totalPrice;
  }

}
