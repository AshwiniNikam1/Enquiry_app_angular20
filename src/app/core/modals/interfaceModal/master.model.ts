export interface Istatus {
  statusId: number;
  statusName: string;
  isActive: boolean;
}

export interface ICategory {
  categoryId: number;
  categoryName: string;
  isActive: boolean;
}

export interface Iapiresponse {
  error: any[];
  result: boolean;
  data: any[];
  message?: string;
}
