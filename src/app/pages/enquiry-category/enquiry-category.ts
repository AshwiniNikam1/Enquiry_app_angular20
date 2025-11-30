import { Component, inject } from '@angular/core';
import { EnquiryCategoryService } from '../../core/services/enquiryCategoryService/enquiry-category-service';
import { Iapiresponse, ICategory } from '../../core/modals/interfaceModal/master.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-enquiry-category',
  imports: [CommonModule],
  templateUrl: './enquiry-category.html',
  styleUrls: ['./enquiry-category.css'],
})
export class EnquiryCategory {
 enquiryCategoryServices = inject(EnquiryCategoryService);
  categoryList: ICategory[] = [];
  isShowForm: boolean = false;
  isEditMode:boolean=false;
  constructor(){

  }
  ngOnInit() {
    this.getAllcategoriesList();
  }
  getAllcategoriesList(){
    this.enquiryCategoryServices.getAllCategories().subscribe({
      next:(res:Iapiresponse)=>{
        this.categoryList=res.data;
      }
    })
  }
  openModal(){
this.isShowForm =true;
  }
}
