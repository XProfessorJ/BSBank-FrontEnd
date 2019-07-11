import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginNavTitleComponent } from './login-nav-title.component';

describe('LoginNavTitleComponent', () => {
  let component: LoginNavTitleComponent;
  let fixture: ComponentFixture<LoginNavTitleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginNavTitleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginNavTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
