import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iapiresponse } from '../../modals/interfaceModal/apiResponse.model';
import { environment } from '../../../../environments/environment';
import { APIConstants } from '../../constants/constant';
import { ICategory } from '../../modals/interfaceModal/enquiryCategory.model';

@Injectable({
  providedIn: 'root',
})
export class EnquiryCategoryService {
  constructor(private http: HttpClient) {}

  getAllCategories(): Observable<Iapiresponse> {
    return this.http.get<Iapiresponse>(
      environment.API_URL +
        APIConstants.CONTROLLER_TYPES.ENQUIRY +
        APIConstants.ENQUIRY_CATEGORY.GET_CATEGORIES
    );
  }

  createcategory(payload: ICategory): Observable<Iapiresponse> {
    return this.http.post<Iapiresponse>(
      environment.API_URL +
        APIConstants.CONTROLLER_TYPES.ENQUIRY +
        APIConstants.ENQUIRY_CATEGORY.CREATE_CATEGORY,
      payload
    );
  }
  updateCategory(payload: ICategory): Observable<Iapiresponse> {
    return this.http.put<Iapiresponse>(
      environment.API_URL +
        APIConstants.CONTROLLER_TYPES.ENQUIRY +
        APIConstants.ENQUIRY_CATEGORY.UPDATE_CATEGORY +
        payload.categoryId,
      payload
    );
  }
  deleteCategory(id: number): Observable<Iapiresponse> {
    return this.http.delete<Iapiresponse>(
      environment.API_URL +
        APIConstants.CONTROLLER_TYPES.ENQUIRY +
        APIConstants.ENQUIRY_CATEGORY.DELETE_CATEGORY +
        id
    );
  }
}
