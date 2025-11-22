import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { EnquiryCategory } from './pages/enquiry-category/enquiry-category';
import { EnquiryStatus } from './pages/enquiry-status/enquiry-status';
import { SubmitEnquiryForm } from './pages/submit-enquiry-form/submit-enquiry-form';

export const routes: Routes = [
    {
        path:'', redirectTo:'home', pathMatch:'full'
    },
    {
        path:'home', component:Home
    },
    {
        path: 'enquiry-category', component:EnquiryCategory
    },
    {
        path:'enquiry-status',component:EnquiryStatus
    },
    {
        path:'submit-enquiry-form', component:SubmitEnquiryForm
    }
];
