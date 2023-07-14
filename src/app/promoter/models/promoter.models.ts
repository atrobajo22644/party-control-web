import {Event, Promoter} from "../../app-common/models";

export interface PromoterDialogModel {
  title: string;
  promoter: Promoter
}

export interface EventDialogModel {
  title: string;
  event: Event
  activePromoters: Promoter[];
}
