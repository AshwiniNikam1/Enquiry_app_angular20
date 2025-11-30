import { Component, inject, OnInit } from '@angular/core';
import { EnquiryService } from '../../core/services/enquiryService/enquiry-service';
import { Iapiresponse } from '../../core/modals/interfaceModal/master.model';
import { EnquiryModal } from '../../core/modals/classModal/enquiryClass.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-enquiry-list',
  imports: [],
  templateUrl: './enquiry-list.html',
  styleUrl: './enquiry-list.css',
})
export class EnquiryList implements OnInit {
  enquiryListService = inject(EnquiryService);
  enquiryList: EnquiryModal[] = [];
  router = inject(Router);
  constructor() {}
  ngOnInit() {
    this.getAllEnquiries();
  }

  getAllEnquiries() {
    this.enquiryListService.getAllEnquries().subscribe({
      next: (res: Iapiresponse) => {
        this.enquiryList = res.data;
        console.log('res', res);
      },
      error: (err: Iapiresponse) => {
        err.message;
      },
    });
  }
  onDelete(id: number) {
    const prompt = confirm('Are you sure you want to delete this enquiry?');
    if (prompt) {
      //call delete api
      this.enquiryListService.deleteEnquiry(id).subscribe({
        next: (res: Iapiresponse) => {
          if (res.result) {
            alert('Enquiry deleted successfully');
            //refresh list
            this.getAllEnquiries();
          }
        },
        error: (err: Iapiresponse) => {
          alert('Error deleting enquiry: ' + err.message);
        },
      });
    }
  }
  onUpdateEnquiry(enquiry: EnquiryModal) {
    this.router.navigate(['/submit-enquiry-form', enquiry.enquiryId]);
  }
}
