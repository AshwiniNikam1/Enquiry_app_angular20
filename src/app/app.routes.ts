import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { EnquiryCategory } from './pages/enquiry-category/enquiry-category';
import { EnquiryStatus } from './pages/enquiry-status/enquiry-status';
import { SubmitEnquiryForm } from './pages/submit-enquiry-form/submit-enquiry-form';
import { EnquiryList } from './pages/enquiry-list/enquiry-list';
import { Login } from './pages/login/login';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: Home,
  },
  {
    path: 'login',
    component: Login,
  },
  {
    path: 'enquiry-category',
    component: EnquiryCategory,
  },
  {
    path: 'enquiry-status',
    component: EnquiryStatus,
  },
  {
    path: 'submit-enquiry-form',
    component: SubmitEnquiryForm,
  },
  {
  path: 'submit-enquiry-form/:id',
  component: SubmitEnquiryForm
},
  {
    path: 'enquiry-list',
    component: EnquiryList,
  },
  {
    path: 'dashboard',
    component: SubmitEnquiryForm,
  },
];
