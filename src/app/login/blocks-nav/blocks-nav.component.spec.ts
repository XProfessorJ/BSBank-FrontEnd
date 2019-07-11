import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BlocksNavComponent } from './blocks-nav.component';

describe('BlocksNavComponent', () => {
  let component: BlocksNavComponent;
  let fixture: ComponentFixture<BlocksNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlocksNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlocksNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
