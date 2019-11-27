import { ReactiveFormsModule } from '@angular/forms';
import { CommonService } from '@services/common.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginFormComponent } from './login-form.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

class MockMatSnackBar {}
class MockHttpClient {}
class MockCommonService {
  public getLocalSessionValue(key: string) {
    return {};
  }
}

describe('LoginFormComponent', () => {
  let component: LoginFormComponent;
  let fixture: ComponentFixture<LoginFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, ReactiveFormsModule],
      declarations: [LoginFormComponent],
      providers: [
        { provide: HttpClient, useClass: MockHttpClient },
        { provide: CommonService, useClass: MockCommonService },
        { provide: MatSnackBar, useClass: MockMatSnackBar }
      ],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });
});
