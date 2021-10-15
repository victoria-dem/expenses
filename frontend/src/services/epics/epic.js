import { ofType, combineEpics } from 'redux-observable';
import { map, mapTo, catchError, mergeMap, expand } from 'rxjs/operators';
import { of, EMPTY } from 'rxjs';
import { ajax } from 'rxjs/ajax';

import {
  MAKE_REQUEST,
  makeRequestSuccess,
  makeRequestError,
} from '../reducers/reducer-rx';

const makeRequest$ = (action$, state$) =>
  action$.pipe(
    ofType(MAKE_REQUEST),
    mergeMap(({ payload: id }) => {
      return ajax(`http://localhost:3000/expenses/${id}`).pipe(
        expand(({ response }) =>
          response.parent
            ? ajax(`http://localhost:3000/expenses/${response.parent}`)
            : EMPTY
        ),
        map(({ response }) => makeRequestSuccess(response.data)),
        catchError((error) => of(makeRequestError(error)))
      );
    })
  );

export const epics = combineEpics(makeRequest$);

// export default epics;
