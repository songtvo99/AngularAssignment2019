import { MaterialModule } from '@modules/material/material.module';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListItemComponent } from './app-list-item.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('AppListItem (isolated test)', () => {
  let component: AppListItemComponent;
  it("should instantiate", () => {
    const component: AppListItemComponent = new AppListItemComponent();
    expect(component).toBeDefined();
  });

});

describe("AppListItem (Shallow test)", () => {
  let component: AppListItemComponent;
  let fixture: ComponentFixture<AppListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppListItemComponent],
      schemas: [NO_ERRORS_SCHEMA]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });

});

describe("AppListItem (integrated test)", () => {
  let component: AppListItemComponent;
  let fixture: ComponentFixture<AppListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppListItemComponent]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
