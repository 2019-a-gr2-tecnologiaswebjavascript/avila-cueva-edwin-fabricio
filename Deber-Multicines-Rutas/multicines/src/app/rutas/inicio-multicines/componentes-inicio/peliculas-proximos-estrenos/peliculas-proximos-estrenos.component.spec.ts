import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasProximosEstrenosComponent } from './peliculas-proximos-estrenos.component';

describe('PeliculasProximosEstrenosComponent', () => {
  let component: PeliculasProximosEstrenosComponent;
  let fixture: ComponentFixture<PeliculasProximosEstrenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasProximosEstrenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasProximosEstrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
