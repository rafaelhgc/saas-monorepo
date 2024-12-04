import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OptInService {
  private _toggle = new BehaviorSubject<boolean>(false);

  get toggle() {
    return this._toggle.asObservable();
  }

  emit(toggle: boolean) {
    this._toggle.next(toggle);
  }
}
