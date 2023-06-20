import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BannerFavoriteComponent } from './banner-favorite.component';

describe('BannerFavoriteComponent', () => {
  let component: BannerFavoriteComponent;
  let fixture: ComponentFixture<BannerFavoriteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BannerFavoriteComponent]
    });
    fixture = TestBed.createComponent(BannerFavoriteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
