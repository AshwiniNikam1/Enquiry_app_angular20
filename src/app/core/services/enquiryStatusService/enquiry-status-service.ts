import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iapiresponse } from '../../modals/interfaceModal/apiResponse.model';
import { Istatus } from '../../modals/interfaceModal/enquiryStatus.model';
import { environment } from '../../../../environments/environment';
import { APIConstants } from '../../constants/constant';

@Injectable({
  providedIn: 'root',
})
export class EnquiryStatusService {
  constructor(private http: HttpClient) {}
  getAllStatus(): Observable<Iapiresponse> {
    return this.http.get<Iapiresponse>(
      environment.API_URL +
        APIConstants.CONTROLLER_TYPES.ENQUIRY +
        APIConstants.ENQUIRY_STATUS.GET_STATUS
    );
  }

  createStatus(payload: Istatus): Observable<Iapiresponse> {
    return this.http.post<Iapiresponse>(
      environment.API_URL +
        APIConstants.CONTROLLER_TYPES.ENQUIRY +
        APIConstants.ENQUIRY_STATUS.CREATE_STATUS,
      payload
    );
  }

  updateStatus(payload: Istatus): Observable<Iapiresponse> {
    return this.http.put<Iapiresponse>(
      environment.API_URL +
        APIConstants.CONTROLLER_TYPES.ENQUIRY +
        APIConstants.ENQUIRY_STATUS.UPDATE_STATUS +
        payload.statusId,
      payload
    );
  }

  deleteStatus(id: number): Observable<Iapiresponse> {
    return this.http.delete<Iapiresponse>(
      environment.API_URL +
        APIConstants.CONTROLLER_TYPES.ENQUIRY +
        APIConstants.ENQUIRY_STATUS.DELETE_STATUS +
        id
    );
  }
}
