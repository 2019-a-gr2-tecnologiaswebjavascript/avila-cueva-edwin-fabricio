import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraPortadaComponent } from './cabecera-portada.component';

describe('CabeceraPortadaComponent', () => {
  let component: CabeceraPortadaComponent;
  let fixture: ComponentFixture<CabeceraPortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraPortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
