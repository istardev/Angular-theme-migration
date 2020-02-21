import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeautureItemComponent } from './feauture-item.component';

describe('FeautureItemComponent', () => {
  let component: FeautureItemComponent;
  let fixture: ComponentFixture<FeautureItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeautureItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeautureItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
