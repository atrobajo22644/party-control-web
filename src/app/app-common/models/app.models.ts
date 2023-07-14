export interface Promoter {
  id: number;
  name: string;
  active: boolean;
}

export interface PromoterPage {
  pageNumber: number;
  totalItems: number;
  totalPages: number;
  promoters: Promoter[];
}

export interface TableFilter {
  filter: string;
  sort: string;
  pageNumber: number;
  pageSize: number;
}

export interface Event {
  id: number;
  name: string;
  eventDate: Date;
  vipTotal: number;
  freeLadiesTotal: number;
  totalGeneralAdmission: number;
  totalOver21: number;
  promoters: EventPromoter[];
  open: boolean;
}

export interface NewEvent {
  name: string;
  eventDate: Date;
  open: boolean;
  promoters: number[];
}

export interface UpdateEvent {
  name: string;
  eventDate: Date;
  vipTotal: number;
  freeLadiesTotal: number;
  totalGeneralAdmission: number;
  totalOver21: number;
  promoters: number[];
  open: boolean;
}

export interface EventPromoter {
  ladies: number;
  guys: number;
  freeLadies: number;
  vip: number;
  paid: boolean;
  promoter: Promoter;
}

export interface EventTotals {
  totalGeneralAdmission: number;
  totalOver21: number;
}

export interface EventPage {
  pageNumber: number;
  totalItems: number;
  totalPages: number;
  events: Event[];
}

export interface BaseDialogModel {
  title: string;
}

export interface ConfirmDialogModel extends BaseDialogModel {
  message: string;
}

export interface ApiResponse {
  success: string;
  message: string;
}

export let promoterInitFilter: TableFilter = {
  filter: '',
  sort: 'id,asc',
  pageNumber: 0,
  pageSize: 10,
};

export let eventInitFilter: TableFilter = {
  filter: '',
  sort: 'eventDate,desc',
  pageNumber: 0,
  pageSize: 10,
};

export let initEvent: Event = {
  id: -1,
  name: '',
  eventDate: new Date(),
  vipTotal: 0,
  freeLadiesTotal: 0,
  totalGeneralAdmission: 0,
  totalOver21: 0,
  promoters: [],
  open: false
};
