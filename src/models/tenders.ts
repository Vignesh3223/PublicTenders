export interface Tenders {
    tenderId: number;
    tenderName: string;
    referencenumber: string;
    description: string;
    categoryId: number;
    projectValue: number;
    tenderOpeningDate: Date;
    tenderClosingDate: Date;
    location: string;
    authority: string;
    projectStartDate: string;
    projectEndDate: string;
    applicationFee: number;
    isTaken: boolean;
}