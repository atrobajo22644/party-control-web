import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {ApiResponse, Promoter, PromoterPage} from "../../app-common/models";
import {BehaviorSubject, finalize, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PromoterService {
  private API_URL= environment.apiUrl;
  public loadingSubject = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }

  /*getPromoters() : Observable<PromoterPage>{
    return this.http.get<PromoterPage>(`${this.API_URL}/promoters`);
  }*/

  filterPromoters(filter = '', sort = '', page = 0, size = 10) : Observable<PromoterPage>{
    this.loadingSubject.next(true);
    return this.http.get<PromoterPage>(`${this.API_URL}/promoters`, {
      params: new HttpParams()
        .set('filter', filter)
        .set('sort', sort)
        .set('page', page.toString())
        .set('size', size.toString())
    }).pipe(finalize(() => this.loadingSubject.next(false)));
  }

  createPromoter(promoter: Promoter) : Observable<Promoter>{
    return this.http.post<Promoter>(`${this.API_URL}/promoters`, promoter);
  }

  updatePromoter(promoter: Promoter) : Observable<Promoter>{
    return this.http.put<Promoter>(`${this.API_URL}/promoters/${promoter.id}`,
      {name: promoter.name, active: promoter.active});
  }

  deletePromoter(promoterId: number) : Observable<ApiResponse>{
    return this.http.delete<ApiResponse>(`${this.API_URL}/promoters/${promoterId}`);
  }
}
