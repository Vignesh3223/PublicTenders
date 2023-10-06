export interface TendersTaken {
    takenId: number;
    tenderId: number;
    quotationId: number;
    tenderName: string;
    companyName: string;
    proprieator: string;
    email:string;
    projectValue: number;
    location: string;
    authority: string;
    projectStartDate: Date;
    projectEndDate: Date;
    quoteAmount: number;
}