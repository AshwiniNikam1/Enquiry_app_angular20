import { Component, ElementRef, inject, OnInit, ViewChild } from '@angular/core';
import { EnquiryStatusService } from '../../core/services/enquiryStatusService/enquiry-status-service';
import { Iapiresponse, Istatus } from '../../core/modals/interfaceModal/master.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enquiry-status',
  imports: [CommonModule],
  templateUrl: './enquiry-status.html',
  styleUrl: './enquiry-status.css',
})
export class EnquiryStatus implements OnInit {
  enquiryStatusesService = inject(EnquiryStatusService);
  statusList: Istatus[] = [];
  isShowForm: boolean = false;
  isEditMode:boolean=false;

  constructor() {}
  ngOnInit() {
    this.getAllEnquiryStatusList();
  }
  getAllEnquiryStatusList() {
    this.enquiryStatusesService.getAllStatus().subscribe({
      next: (res: Iapiresponse) => {
        this.statusList = res.data;
      },
    });
  }
  openModal(){
this.isShowForm =true;
  }

}
