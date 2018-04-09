import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';
import { AppComponent } from './app.component';
import { VehiclesListComponent } from './vehicle/vehicles-list/vehicles-list.component';
import { HttpService } from './vehicle/service/http.service';
import { VehiclesService } from './vehicle/service/vehicles.service';
import { MatTableModule } from '@angular/material';
import { VehiclesAddFormComponent } from './vehicle/vehicles-add-form/vehicles-add-form.component';

@NgModule({
  declarations: [
    AppComponent,
    VehiclesListComponent,
    VehiclesAddFormComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatTableModule
  ],
  providers: [HttpService, VehiclesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
