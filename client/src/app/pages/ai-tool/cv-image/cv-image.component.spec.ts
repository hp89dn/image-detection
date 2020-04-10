import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CvImageComponent } from './cv-image.component';

describe('CvImageComponent', () => {
  let component: CvImageComponent;
  let fixture: ComponentFixture<CvImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CvImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CvImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
