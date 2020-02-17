import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletNavComponent } from './bullet-nav.component';

describe('BulletNavComponent', () => {
  let component: BulletNavComponent;
  let fixture: ComponentFixture<BulletNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BulletNavComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
