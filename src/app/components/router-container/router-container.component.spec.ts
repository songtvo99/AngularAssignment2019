import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterContainerComponent } from './router-container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('RouterContainerComponent', () => {
  let component: RouterContainerComponent;
  let fixture: ComponentFixture<RouterContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RouterContainerComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouterContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
