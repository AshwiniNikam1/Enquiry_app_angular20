export class EnquiryModal {
  enquiryId: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  message: string;
  categoryId: string;
  statusId: string;
  enquiryType: string;
  isConverted: boolean;
  enquiryDate: Date;
  followUpDate: Date;
  feedback: string;
  constructor() {
    this.enquiryId = 0;
    this.customerName = '';
    this.customerEmail = '';
    this.customerPhone = '';
    this.message = '';
    this.categoryId = ''; //foreign key: converted as string instead of number : used for drop down as string
    this.statusId = '';
    this.enquiryType = '';
    this.isConverted = false;
    this.enquiryDate = new Date();
    this.followUpDate = new Date();
    this.feedback = '';
  }
}
