import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Injectable } from '@angular/core';
import { HttpService } from './http.service';
import { Vehicle } from '../model/vehicle.model';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VehiclesService {
  private vehiclesListObs = new BehaviorSubject<Array<Vehicle>>([]);
  constructor(private httpService: HttpService) {
    this.httpService.getVehicles().subscribe(list => {
      this.vehiclesListObs.next(list);
    });
  }
  getVehiclesListObs(): Observable<Array<Vehicle>> {
    return this.vehiclesListObs.asObservable();
  }
}
