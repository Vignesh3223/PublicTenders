export interface Tenders {
    tendername: string;
    referencenumber: string;
    description: string;
    //categoryid:number;
    projectvalue: number;
    tenderopeningdate: Date;
    tenderclosingdate: Date;
    location: string;
    authority: string;
    projectstartdate: string;
    projectenddate: string;
    applicationfee: number;
}