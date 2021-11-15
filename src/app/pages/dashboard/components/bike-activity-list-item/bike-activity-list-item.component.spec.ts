import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BikeActivityListItemComponent} from './bike-activity-list-item.component';

describe('BikeAcvtivityComponent', () => {
  let component: BikeActivityListItemComponent;
  let fixture: ComponentFixture<BikeActivityListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeActivityListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeActivityListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
