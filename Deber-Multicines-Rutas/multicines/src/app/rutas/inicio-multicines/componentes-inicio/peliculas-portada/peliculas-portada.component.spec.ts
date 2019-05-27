import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PeliculasPortadaComponent } from './peliculas-portada.component';

describe('PeliculasPortadaComponent', () => {
  let component: PeliculasPortadaComponent;
  let fixture: ComponentFixture<PeliculasPortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PeliculasPortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PeliculasPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
