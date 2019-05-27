import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PromocionesMulticinesComponent } from './promociones-multicines.component';

describe('PromocionesMulticinesComponent', () => {
  let component: PromocionesMulticinesComponent;
  let fixture: ComponentFixture<PromocionesMulticinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocionesMulticinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PromocionesMulticinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
