import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselDulceriaComponent } from './carousel-dulceria.component';

describe('CarouselDulceriaComponent', () => {
  let component: CarouselDulceriaComponent;
  let fixture: ComponentFixture<CarouselDulceriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselDulceriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselDulceriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
