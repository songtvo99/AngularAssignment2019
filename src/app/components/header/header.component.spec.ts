import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  //let fixture: ComponentFixture<HeaderComponent>;

  it('should defined', () => {
    component = new HeaderComponent();
    expect(component).toBeTruthy();
  });
});
