import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action, Store } from '@ngrx/store';
import { Observable, throwError } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { GamesService } from '../../services/games.service';
import {
  loadGames,
  loadGamesFail,
  loadGamesSuccess,
} from '../actions/api.actions';

@Injectable()
export class GamesEffect {
  loadGames$: Observable<any> = createEffect(() =>
    this.actions$.pipe(
      ofType(loadGames),
      map((action: Action) => this.gamesService.loadGames()),
      concatMap((serviceResponse: Observable<any>) => serviceResponse),
      catchError((error: HttpErrorResponse) => {
        this.store.dispatch(loadGamesFail());
        return throwError(error);
      }),
      map((serviceResponse: any) => {
        if (serviceResponse) {
          return loadGamesSuccess({ payload: serviceResponse });
        } else {
          return loadGamesFail();
        }
      })
    )
  );

  constructor(
    private actions$: Actions,
    private store: Store,
    private gamesService: GamesService
  ) {}
}
