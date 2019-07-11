import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSigninComponentComponent } from './login-signin-component.component';

describe('LoginSigninComponentComponent', () => {
  let component: LoginSigninComponentComponent;
  let fixture: ComponentFixture<LoginSigninComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginSigninComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginSigninComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
