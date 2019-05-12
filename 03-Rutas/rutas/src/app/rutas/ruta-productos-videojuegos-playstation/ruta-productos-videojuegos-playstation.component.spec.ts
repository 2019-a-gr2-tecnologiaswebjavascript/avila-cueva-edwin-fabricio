import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosVideojuegosPlaystationComponent } from './ruta-productos-videojuegos-playstation.component';

describe('RutaProductosVideojuegosPlaystationComponent', () => {
  let component: RutaProductosVideojuegosPlaystationComponent;
  let fixture: ComponentFixture<RutaProductosVideojuegosPlaystationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosVideojuegosPlaystationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosVideojuegosPlaystationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
