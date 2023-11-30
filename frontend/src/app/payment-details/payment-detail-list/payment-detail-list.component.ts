import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PaymentDetail } from 'src/app/shared/payment-detail.model';
import { PaymentDetailService } from 'src/app/shared/payment-detail.service';

@Component({
  selector: 'app-payment-detail-list',
  templateUrl: './payment-detail-list.component.html',
  styles: [
  ]
})
export class PaymentDetailListComponent implements OnInit {

  constructor(public service: PaymentDetailService, public toastr: ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList();
  }

  populateForm(pd: PaymentDetail) {
    this.service.formData = Object.assign({}, pd);
  }

  onDelete(PMID: number) {
    if (confirm('Are you sure to delete this record?')) {
      this.service.deletePaymentDetail(PMID)
        .subscribe(res => {
          this.service.refreshList();
          this.toastr.warning('Deleted Succesfully', 'Payment Detail Service');
        },
          err => {
            console.log(err)
          })
    }
  }

}