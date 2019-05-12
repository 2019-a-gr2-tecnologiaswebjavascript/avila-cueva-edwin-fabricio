import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RutaProductosVideojuegosComputadoraComponent } from './ruta-productos-videojuegos-computadora.component';

describe('RutaProductosVideojuegosComputadoraComponent', () => {
  let component: RutaProductosVideojuegosComputadoraComponent;
  let fixture: ComponentFixture<RutaProductosVideojuegosComputadoraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RutaProductosVideojuegosComputadoraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RutaProductosVideojuegosComputadoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
