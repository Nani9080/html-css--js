import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavcomponentComponent } from './navcomponent.component';

describe('NavcomponentComponent', () => {
  let component: NavcomponentComponent;
  let fixture: ComponentFixture<NavcomponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NavcomponentComponent]
    });
    fixture = TestBed.createComponent(NavcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
