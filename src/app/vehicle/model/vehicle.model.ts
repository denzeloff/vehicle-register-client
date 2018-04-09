export class Vehicle {
  id: number;
  vehicleType: string;
  brand: string;
  model: string;
  productionDate: number;
  mileage: number;
  registrationNumber: string;
  vinNumber: string;


  constructor(vehicleType: string, brand: string, model: string,
    productionDate: number, mileage: number, registrationNumber: string, vinNumber: string) {
    this.vehicleType = vehicleType;
    this.brand = brand;
    this.model = model;
    this.productionDate = productionDate;
    this.mileage = mileage;
    this.registrationNumber = registrationNumber;
    this.vinNumber = vinNumber;
  }
}
