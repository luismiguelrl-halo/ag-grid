import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { BreakingBadService } from 'src/app/services/breaking-bad.service';

@Component({
  selector: 'app-grid-pagination-fe',
  templateUrl: './grid-pagination-fe.component.html',
  styleUrls: ['./grid-pagination-fe.component.scss']
})
export class GridPaginationFeComponent {


  public columnDefs: ColDef[] = [
    { field: 'name'},
    { field: 'birthday'},
    { field: 'occupation' }
  ];

  // DefaultColDef sets props common to all Columns
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 200,
    resizable: true,
    floatingFilter: true,
  };

  // Data that gets displayed in the grid
  public rowData$!: Observable<any[]>;

  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  constructor(private breakingBadService:BreakingBadService) {}

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.breakingBadService.getAllCharacters();
  }

  // Example of consuming Grid Event
  onCellClicked( e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }

}
