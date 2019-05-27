import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DulceriaMulticinesComponent } from './dulceria-multicines.component';

describe('DulceriaMulticinesComponent', () => {
  let component: DulceriaMulticinesComponent;
  let fixture: ComponentFixture<DulceriaMulticinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DulceriaMulticinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DulceriaMulticinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
