import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentSidenavComponent } from './component-sidenav.component';

describe('ComponentSidenavComponent', () => {
  let component: ComponentSidenavComponent;
  let fixture: ComponentFixture<ComponentSidenavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentSidenavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
