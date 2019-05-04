import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CabeceraMulticinesComponent } from './cabecera-multicines.component';

describe('CabeceraMulticinesComponent', () => {
  let component: CabeceraMulticinesComponent;
  let fixture: ComponentFixture<CabeceraMulticinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CabeceraMulticinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CabeceraMulticinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
