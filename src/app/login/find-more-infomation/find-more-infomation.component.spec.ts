import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindMoreInfomationComponent } from './find-more-infomation.component';

describe('FindMoreInfomationComponent', () => {
  let component: FindMoreInfomationComponent;
  let fixture: ComponentFixture<FindMoreInfomationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindMoreInfomationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindMoreInfomationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
