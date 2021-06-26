import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BikeActivityMetadataComponent} from './bike-activity-metadata.component';

describe('BikeAcvtivityComponent', () => {
  let component: BikeActivityMetadataComponent;
  let fixture: ComponentFixture<BikeActivityMetadataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BikeActivityMetadataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BikeActivityMetadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
