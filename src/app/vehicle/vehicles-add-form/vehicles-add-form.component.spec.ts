import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VehiclesAddFormComponent } from './vehicles-add-form.component';

describe('VehiclesAddFormComponent', () => {
  let component: VehiclesAddFormComponent;
  let fixture: ComponentFixture<VehiclesAddFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiclesAddFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VehiclesAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
