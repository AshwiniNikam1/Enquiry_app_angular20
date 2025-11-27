import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { APIConstants } from '../../constants/constant';
import { EnquiryModal } from '../../modals/classModal/enquiryClass.model';
import { Observable } from 'rxjs';
import { Iapiresponse } from '../../modals/interfaceModal/apiResponse.model';

@Injectable({
  providedIn: 'root',
})
export class EnquiryService {
  constructor(private http: HttpClient) {}

  getAllEnquries() {
    return this.http.get(
      environment.API_URL +
        APIConstants.CONTROLLER_TYPES.ENQUIRY +
        APIConstants.ENQUIRY.GET_ENQUIRIES
    );
  }

  createEnquiry(payload: EnquiryModal): Observable<Iapiresponse> {
  console.log('payload', payload);
    return this.http.post<Iapiresponse>(
      environment.API_URL +
        APIConstants.CONTROLLER_TYPES.ENQUIRY +
        APIConstants.ENQUIRY.CREATE_ENQUIRY,
      payload
    );
  }

  updateEnquiry(payload: EnquiryModal): Observable<Iapiresponse> {
    return this.http.put<Iapiresponse>(
      environment.API_URL +
        APIConstants.CONTROLLER_TYPES.ENQUIRY +
        APIConstants.ENQUIRY.UPDATE_ENQUIRY +
        payload.statusId,
      payload
    );
  }
  deleteEnquiry(id: number): Observable<Iapiresponse> {
    return this.http.delete<Iapiresponse>(
      environment.API_URL +
        APIConstants.CONTROLLER_TYPES.ENQUIRY +
        APIConstants.ENQUIRY.DELETE_ENQUIRY +
        id
    );
  }

  getEnquiryById(id: number): Observable<Iapiresponse> {
    return this.http.get<Iapiresponse>(
      environment.API_URL +
        APIConstants.CONTROLLER_TYPES.ENQUIRY +
        APIConstants.ENQUIRY.GET_ENQUIRY_BY_ID +
        id
    );
  }
  filterEnquiries(filterParams: EnquiryModal): Observable<Iapiresponse> {
    return this.http.post<Iapiresponse>(
      environment.API_URL +
        APIConstants.CONTROLLER_TYPES.ENQUIRY +
        APIConstants.ENQUIRY.FILTER_ENQUIRIES,
      filterParams
    );
  }
}
