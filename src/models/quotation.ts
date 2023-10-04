export interface Quotation {
    quotationId: number;
    userId: number;
    companyName: string;
    proprieator: string;
    tenderId: number;
    tenderName: string;
    projectValue: number;
    location: string;
    authority: string;
    projectStartDate: Date;
    projectEndDate: Date;
    applicationFee:number;
    quoteAmount: number;
}