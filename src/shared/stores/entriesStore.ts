import { from, Subject, throwError } from 'rxjs';
import { tap, takeUntil, timeout, catchError, switchMap, skip } from 'rxjs/operators';

import { SvelteSubject } from '$utils/subject';
import { getItemCombinedEntry } from '$utils/index';

import type { ItemCombinedEntry } from '$models/entries';

const entries$ = new SvelteSubject<ItemCombinedEntry>();

export const useEntry = () => {
  const newEntry$ = new Subject<boolean>();
  const destroy$ = new Subject<boolean>();

  const fetchEntry = () => newEntry$.next(true);

  newEntry$.pipe(
    switchMap(() => from(getItemCombinedEntry())),
    skip(1),
    tap(_entries => _entries && entries$.set(_entries)),
    tap(console.log),
    timeout({
      first: 15 * 1000,
      with: () => throwError(() => new Error('Not connected to ContentStack'))
    }),
    catchError((_err, caught) => {
      entries$.set({failed: true});
      destroy$.next(true);

      return caught;
    }),
    takeUntil(destroy$)
  ).subscribe();

  return { newEntry$, destroy$, fetchEntry };
}

export default entries$;