import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrawerTestComponent } from './drawer-test.component';

describe('DrawerTestComponent', () => {
  let component: DrawerTestComponent;
  let fixture: ComponentFixture<DrawerTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrawerTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrawerTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
