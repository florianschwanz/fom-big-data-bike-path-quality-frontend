import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BikeActivityList } from './bike-activity-list.component';

describe('MapOverlayComponent', () => {
  let component: BikeActivityList;
  let fixture: ComponentFixture<BikeActivityList>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeActivityList ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeActivityList);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
