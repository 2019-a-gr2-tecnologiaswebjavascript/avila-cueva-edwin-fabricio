import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MulticlubMulticinesComponent } from './multiclub-multicines.component';

describe('MulticlubMulticinesComponent', () => {
  let component: MulticlubMulticinesComponent;
  let fixture: ComponentFixture<MulticlubMulticinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MulticlubMulticinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MulticlubMulticinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
