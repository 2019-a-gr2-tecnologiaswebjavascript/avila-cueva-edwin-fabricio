import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioMulticinesComponent } from './inicio-multicines.component';

describe('InicioMulticinesComponent', () => {
  let component: InicioMulticinesComponent;
  let fixture: ComponentFixture<InicioMulticinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioMulticinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioMulticinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
