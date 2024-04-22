import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavtabComponent } from './navtab.component';

describe('NavtabComponent', () => {
  let component: NavtabComponent;
  let fixture: ComponentFixture<NavtabComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavtabComponent]
    });
    fixture = TestBed.createComponent(NavtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
