import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenesDulcesComponent } from './imagenes-dulces.component';

describe('ImagenesDulcesComponent', () => {
  let component: ImagenesDulcesComponent;
  let fixture: ComponentFixture<ImagenesDulcesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImagenesDulcesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenesDulcesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
