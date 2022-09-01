import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent, ValueFormatterParams } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { BreakingBadService } from 'src/app/services/breaking-bad.service';
import { CustomDateComponent } from '../custom-date/custom-date.component';
import { MatDatePickerComponent } from '../shared/date-picker';

@Component({
  selector: 'app-grid-pagination-fe',
  templateUrl: './grid-pagination-fe.component.html',
  styleUrls: ['./grid-pagination-fe.component.scss']
})
export class GridPaginationFeComponent {

  public components = {
    agDateInput: CustomDateComponent
  };

  public columnDefs: ColDef[] = [
    { field: 'name', sortable: true, filter: true, },
    { field: 'birthday', editable: true, sortable: true, filter: true, cellEditor: "datePicker", valueFormatter: this.dateFormatter },
    { field: 'occupation', sortable: true, filter: true }
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
  frameworkComponents: { datePicker: typeof MatDatePickerComponent; };

  constructor(private breakingBadService: BreakingBadService, public datepipe: DatePipe) {
    this.frameworkComponents = { datePicker: MatDatePickerComponent };
  }

  // Example load data from sever
  onGridReady(params: GridReadyEvent) {
    this.rowData$ = this.breakingBadService.getAllCharacters();
  }

  // Example of consuming Grid Event
  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
  
  dateFormatter(params: ValueFormatterParams) {
    let datestring= params.value;
    return datestring;
  }
}
