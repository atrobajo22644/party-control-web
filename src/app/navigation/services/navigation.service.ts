import {inject, Injectable} from '@angular/core';
import {BehaviorSubject, filter, Observable} from "rxjs";
import {RouteData} from "../models";
import {ActivatedRoute, ChildActivationEnd, Router} from "@angular/router";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {map, shareReplay} from "rxjs/operators";

@Injectable()
export class NavigationService {
  _sideNavVisible$ = new BehaviorSubject(true);
  _routeData$ = new BehaviorSubject({} as RouteData);
  _currentURL$ = new BehaviorSubject('');

  private breakpointObserver = inject(BreakpointObserver);

  constructor(public route: ActivatedRoute, public router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof ChildActivationEnd))
      .subscribe(event => {
        let snapshot = (event as ChildActivationEnd).snapshot;
        while (snapshot.firstChild !== null) {
          snapshot = snapshot.firstChild;
        }
        this._routeData$.next(snapshot.data as RouteData);
        this._currentURL$.next(router.url);
      });
  }

  toggleSideNav(visibility?: boolean) {
    if (typeof visibility !== 'undefined') {
      this._sideNavVisible$.next(visibility);
    } else {
      this._sideNavVisible$.next(!this._sideNavVisible$.value);
    }
  }

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  sideNavVisible$(): Observable<boolean> {
    return this._sideNavVisible$;
  }
  routeData$(): Observable<RouteData> {
    return this._routeData$;
  }

  currentURL$(): Observable<string> {
    return this._currentURL$;
  }
}
