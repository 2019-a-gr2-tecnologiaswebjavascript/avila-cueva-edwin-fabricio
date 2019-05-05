import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterMulticinesComponent } from './footer-multicines.component';

describe('FooterMulticinesComponent', () => {
  let component: FooterMulticinesComponent;
  let fixture: ComponentFixture<FooterMulticinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterMulticinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterMulticinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
