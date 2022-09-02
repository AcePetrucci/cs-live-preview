import { BehaviorSubject, Subject } from 'rxjs';

export class SvelteSubject<T> extends Subject<T> {
  set(value: T) {
    super.next(value);
  }
}

export class SvelteBehaviorSubject<T> extends BehaviorSubject<T> {
  set(value: T) {
    super.next(value);
  }
}