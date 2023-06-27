import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddforyouImageContainerComponent } from './addforyou-image-container.component';

describe('AddforyouImageContainerComponent', () => {
  let component: AddforyouImageContainerComponent;
  let fixture: ComponentFixture<AddforyouImageContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddforyouImageContainerComponent]
    });
    fixture = TestBed.createComponent(AddforyouImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
