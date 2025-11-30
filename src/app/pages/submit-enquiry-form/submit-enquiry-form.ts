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
import { ActivatedRoute, Router } from '@angular/router';

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
  activeStatus: Istatus[] = [];
  activeCategories: ICategory[] = [];
  newEnquiryObj: EnquiryModal = new EnquiryModal();

  route = inject(ActivatedRoute);
  router = inject(Router);

  isEditMode: boolean = false;

  constructor() {}

  ngOnInit(): void {
    this.getAllCategories();
    this.getAllStatus();
    /** Check if in edit mode by looking for enquiry id in route params */
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.isEditMode = true;
      this.getEnquiryById(id); // Fetch data for edit mode
    }
  }

  /** Get enquiry by id for edit mode */
  getEnquiryById(id: number) {
    this.enquiryFormService.getEnquiryById(id).subscribe({
      next: (res: any) => {
        this.newEnquiryObj = res.data; // auto-fill form
      },
      error: () => {
        alert('Failed to load enquiry');
      },
    });
  }

  /** Get all caterories list  */
  getAllCategories() {
    this.enquiryCategoryService.getAllCategories().subscribe({
      next: (res: Iapiresponse) => {
        this.categoriesList = res.data;
        this.activeCategories = this.categoriesList.filter((c) => c.isActive);
      },
      error: (err: Iapiresponse) => {},
    });
  }

  /** Get all status list  */
  getAllStatus() {
    this.enquiryStatusService.getAllStatus().subscribe({
      next: (res: Iapiresponse) => {
        this.statusList = res.data;
        this.activeStatus = this.statusList.filter((status) => status.isActive);
      },
      error: (err: Iapiresponse) => {},
    });
  }

  /** To create enquiry */
  createEnquiry() {
    this.enquiryFormService.createEnquiry(this.newEnquiryObj).subscribe({
      next: (res: Iapiresponse) => {
        if (res.result) {
          alert('Enquiry submitted successfully');
          this.router.navigateByUrl('/enquiry-list');
        }
      },
      error: (err: Iapiresponse) => {
        alert('Error submitting enquiry: ' + err.message);
      },
    });
  }

  /** To save the enquiries form details */
  onSubmitEnquiry() {
    this.newEnquiryObj.statusId='1';
    if (this.newEnquiryObj.enquiryId > 0 && this.isEditMode) {
      // UPDATE mode
      this.updateEnquiry();
    } else {
      // CREATE mode
      this.createEnquiry();
    }
  }

  /** To update the enquiries form details */
  updateEnquiry() {
    const payload = { ...this.newEnquiryObj };
    this.enquiryFormService.updateEnquiry(payload).subscribe({
      next: (res: any) => {
        if (res.result) {
          alert('enquiry updated successfully');
          this.router.navigate(['/enquiry-list']);
        }
      },
      error: (err: Iapiresponse) => {
        alert('error updating enquiry: ' + err.message);
      },
    });
  }

  /** To reset the form */
  reset() {
    this.newEnquiryObj = new EnquiryModal();
  }
}
