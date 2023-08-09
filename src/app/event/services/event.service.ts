import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {BehaviorSubject, finalize, Observable} from "rxjs";
import {ApiResponse, Event, EventPage, NewEvent, UpdateEvent} from "../../app-common/models";

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private API_URL = environment.apiUrl;
  public loadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) {
  }

  filterEvents(filter = '', sort = '', page = 0, size = 10) : Observable<EventPage>{
    this.loadingSubject.next(true);
    return this.http.get<EventPage>(`${this.API_URL}/events`, {
      params: new HttpParams()
        .set('filter', filter)
        .set('sort', sort)
        .set('page', page.toString())
        .set('size', size.toString())
    }).pipe(finalize(() => this.loadingSubject.next(false)));
  }

  createEvent(event: UpdateEvent) : Observable<Event>{
    return this.http.post<Event>(`${this.API_URL}/events`, event);
  }

  updateEvent(event: UpdateEvent, id: number) : Observable<Event>{
    return this.http.put<Event>(`${this.API_URL}/events/${id}`, event);
  }

  deleteEvent(eventId: number) : Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(`${this.API_URL}/events/${eventId}`);
  }
}
