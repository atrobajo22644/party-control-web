import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {BehaviorSubject, finalize, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {Event, EventPromoter, Promoter, UpdateEvent} from "../models";

@Injectable()
export class SharedService {
  private API_URL = environment.apiUrl;
  public loadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  getActivePromoters() : Observable<Promoter[]>{
    return this.http.get<Promoter[]>(`${this.API_URL}/promoters/active`);
  }

  getLastOpenedEvent() : Observable<Event>{
    this.loadingSubject.next(true);
    return this.http.get<Event>(`${this.API_URL}/events/opened`)
      .pipe(finalize(() => this.loadingSubject.next(false)));
  }

  updateEventPromoter(eventId: number, eventPromoter: EventPromoter) : Observable<Event>{
    this.loadingSubject.next(true);
    return this.http.put<Event>(`${this.API_URL}/events/${eventId}/promoters/${eventPromoter.promoter.id}`, eventPromoter)
      .pipe(finalize(() => this.loadingSubject.next(false)));
  }

  updateEvent(eventId: number, event: UpdateEvent) : Observable<Event>{
    this.loadingSubject.next(true);
    return this.http.put<Event>(`${this.API_URL}/events/${eventId}`, event)
      .pipe(finalize(() => this.loadingSubject.next(false)));
  }
}
