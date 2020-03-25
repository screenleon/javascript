import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { ApiService } from '../service/api.service';

@Injectable({
  providedIn: 'root'
})
export class ProfileResolverService implements Resolve<any> {
  constructor(private service: ApiService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.service.getProfile(route.paramMap.get('username'));
  }
}
