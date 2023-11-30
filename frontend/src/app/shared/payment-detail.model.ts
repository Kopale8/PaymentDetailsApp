export class PaymentDetail {
    PMID: number;
    CardOwnerName: string;
    CardNumber: string;
    ExpirationData: string;
    CVV: string;

    constructor(newPMID: number, newCardOwnerName: string, newCardNumber: string, newExpirationData: string, newCVV: string) {
        this.PMID = newPMID;
        this.CardOwnerName = newCardOwnerName;
        this.CardNumber = newCardNumber;
        this.ExpirationData = newExpirationData;
        this.CVV = newCVV;
    }


}
