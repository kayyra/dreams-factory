import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesImageContainerComponent } from './favorites-image-container.component';

describe('FavoritesImageContainerComponent', () => {
  let component: FavoritesImageContainerComponent;
  let fixture: ComponentFixture<FavoritesImageContainerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoritesImageContainerComponent]
    });
    fixture = TestBed.createComponent(FavoritesImageContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
