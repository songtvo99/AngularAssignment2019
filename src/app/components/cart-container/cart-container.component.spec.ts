import { CartService } from '@services/cart.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartContainerComponent } from './cart-container.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class MockCartService {}

describe('CartContainerComponent', () => {
  let component: CartContainerComponent;
  let fixture: ComponentFixture<CartContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CartContainerComponent],
      providers: [{ provide: CartService, useClass: MockCartService }],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartContainerComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
