import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IonListComponent } from './ion-list.component';

describe('IonListComponent', () => {
  let component: IonListComponent;
  let fixture: ComponentFixture<IonListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IonListComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
