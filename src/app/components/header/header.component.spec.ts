import { MaterialModule } from '@modules/material/material.module';
import { CartService } from '@services/cart.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderComponent } from './header.component';
import { EventEmitter } from 'events';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class MockCartService {
  public cartEventEmitter = new EventEmitter();
}

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let cartService: CartService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [MaterialModule],
      declarations: [HeaderComponent],
      providers: [{ provide: CartService, useClass: MockCartService }],
      schemas: [NO_ERRORS_SCHEMA]
    });

    component = TestBed.createComponent(HeaderComponent).componentInstance;
    cartService = TestBed.get(CartService);
  });

  it('should defined', () => {
    component = new HeaderComponent(cartService);
    expect(component).toBeDefined();
  });
});
