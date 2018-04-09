import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Vehicle } from '../model/vehicle.model';



@Injectable()
export class HttpService {
  constructor(private http: HttpClient) { }
  getVehicles(): Observable<Array<Vehicle>> {
    return this.http.get<Array<Vehicle>>('api/vehicles');
  }
  saveVehicle(vehicle: Vehicle) {
    return this.http.post<Vehicle>('api/save', vehicle);
  }
}
