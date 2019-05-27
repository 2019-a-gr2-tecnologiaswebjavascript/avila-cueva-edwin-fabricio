import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPortadaComponent } from './filtro-portada.component';

describe('FiltroPortadaComponent', () => {
  let component: FiltroPortadaComponent;
  let fixture: ComponentFixture<FiltroPortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroPortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
