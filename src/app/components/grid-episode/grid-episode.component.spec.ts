import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridEpisodeComponent } from './grid-episode.component';

describe('GridEpisodeComponent', () => {
  let component: GridEpisodeComponent;
  let fixture: ComponentFixture<GridEpisodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridEpisodeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridEpisodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
