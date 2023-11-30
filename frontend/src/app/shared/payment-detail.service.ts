import { Injectable } from '@angular/core';
import { PaymentDetail } from './payment-detail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PaymentDetailService {

  readonly rootURL = 'http://localhost:33393/api';

  formData:PaymentDetail= new PaymentDetail(0,"","","","");
  list: PaymentDetail[] = [];

  constructor(public http: HttpClient) { }

  postPaymentDetail() {
    return this.http.post(this.rootURL + '/PaymentDetail/', this.formData)

  }

  putPaymentDetail() {
    return this.http.put(this.rootURL + '/PaymentDetail/'+this.formData.PMID, this.formData)

  }

  
  deletePaymentDetail(id: number) {
    return this.http.delete(this.rootURL + '/PaymentDetail/'+ id)

  }


  refreshList()
  {
    this.http.get(this.rootURL + '/PaymentDetail/')
    .toPromise()
    .then(res => this.list = res as PaymentDetail[]);
  }
}