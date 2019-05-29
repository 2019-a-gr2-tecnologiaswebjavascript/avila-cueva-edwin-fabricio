import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasEstrenosComponent } from './peliculas-estrenos.component';

describe('PeliculasEstrenosComponent', () => {
  let component: PeliculasEstrenosComponent;
  let fixture: ComponentFixture<PeliculasEstrenosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasEstrenosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasEstrenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
