import { Component, OnInit } from '@angular/core';
import { Vehicle } from '../model/vehicle.model';
import { HttpService } from '../service/http.service';

@Component({
  selector: 'app-vehicles-add-form',
  templateUrl: './vehicles-add-form.component.html',
  styleUrls: ['./vehicles-add-form.component.css']
})
export class VehiclesAddFormComponent implements OnInit {
  vehicle: Vehicle;
  vehicleType = '';
  brand = '';
  model = '';
  productionDate: number;
  mileage: number;
  registrationNumber = '';
  vinNumber = '';

  constructor(private httpService: HttpService) {

  }

  ngOnInit() {
  }
  save() {
    this.vehicle = new Vehicle(this.vehicleType, this.brand, this.model, this.productionDate,
      this.mileage, this.registrationNumber, this.vinNumber);
    this.httpService.saveVehicle(this.vehicle).subscribe(data => console.log(data));
  }
}
