import { Component, inject, OnInit } from '@angular/core';
import { EnquiryCategoryService } from '../../core/services/enquiryCategoryService/enquiry-category-service';
import { EnquiryStatusService } from '../../core/services/enquiryStatusService/enquiry-status-service';
import { Iapiresponse } from '../../core/modals/interfaceModal/master.model';
import { ICategory } from '../../core/modals/interfaceModal/master.model';
import { Istatus } from '../../core/modals/interfaceModal/master.model';
import { CommonModule } from '@angular/common';
import { EnquiryModal } from '../../core/modals/classModal/enquiryClass.model';
import { FormsModule } from '@angular/forms';
import { EnquiryService } from '../../core/services/enquiryService/enquiry-service';

@Component({
  selector: 'app-submit-enquiry-form',
  imports: [CommonModule, FormsModule],
  templateUrl: './submit-enquiry-form.html',
  styleUrl: './submit-enquiry-form.css',
})
export class SubmitEnquiryForm implements OnInit {
  enquiryCategoryService = inject(EnquiryCategoryService);
  enquiryStatusService = inject(EnquiryStatusService);
  enquiryFormService = inject(EnquiryService);

  categoriesList: ICategory[] = [];
  statusList: Istatus[] = [];
   newEnquiryObj:EnquiryModal=new EnquiryModal();
  // newEnquiryObj: any = {
  //   "enquiryId": 0,
  //   "customerName": '',
  //   "customerEmail": '',
  //   "customerPhone": '',
  //   "message": '',
  //   "categoryId": 0, // number
  //   "statusId": 0, // number
  //   "enquiryType": '',
  //   "isConverted": false, // boolean
  //   "enquiryDate": new Date(),
  //   "followUpDate": new Date(),
  //   "feedback": '',
  // }
  constructor() {}
  ngOnInit(): void {
    this.getAllCategories();
    this.getAllStatus();
  }
  /** Get all caterories list  */
  getAllCategories() {
    this.enquiryCategoryService.getAllCategories().subscribe({
      next: (res: Iapiresponse) => {
        this.categoriesList = res.data;
        console.log('this.categoriesList', this.categoriesList);
      },
      error: (err: Iapiresponse) => {},
    });
  }

  /** Get all status list  */
  getAllStatus() {
    this.enquiryStatusService.getAllStatus().subscribe({
      next: (res: Iapiresponse) => {
        this.statusList = res.data;
      },
      error: (err: Iapiresponse) => {},
    });
  }
  /** To save the enquiries form details */
  onSubmitEnquiry() {
    this.enquiryFormService.createEnquiry(this.newEnquiryObj).subscribe({
      next: (res: Iapiresponse) => {
         if (res.result) {
          alert('Enquiry submitted successfully');
        }
      },
      error: (err: Iapiresponse) => {
        alert('Error submitting enquiry');
      },
    });
  }
}
