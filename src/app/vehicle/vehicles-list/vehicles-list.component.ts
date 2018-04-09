import { Component, OnInit } from '@angular/core';
import { VehiclesService } from '../service/vehicles.service';
import { Vehicle } from '../model/vehicle.model';
import { MatTable } from '@angular/material';

@Component({
  selector: 'app-vehicles-list',
  templateUrl: './vehicles-list.component.html',
  styleUrls: ['./vehicles-list.component.css']
})
export class VehiclesListComponent implements OnInit {


  listOfAllVehicles: Array<Vehicle> = [];


  displayedColumns = ['vehicleType', 'brand', 'model', 'productionDate', 'mileage', 'registrationNumber', 'vinNumber'];

  constructor(private vehicleService: VehiclesService) {
    this.vehicleService.getVehiclesListObs().subscribe((vehicles: Array<Vehicle>) => {
      this.listOfAllVehicles = vehicles;
    });
  }
  ngOnInit(): void {

  }
}
