
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipalDashboardComponent } from './principal-dashboard.component';

describe('PrincipalDashboardComponent', () => {
  let component: PrincipalDashboardComponent;
  let fixture: ComponentFixture<PrincipalDashboardComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipalDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrincipalDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
