import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GridPaginationFeComponent } from './grid-pagination-fe.component';

describe('GridPaginationFeComponent', () => {
  let component: GridPaginationFeComponent;
  let fixture: ComponentFixture<GridPaginationFeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GridPaginationFeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GridPaginationFeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
