import { Component, OnInit, ViewChild } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent implements OnInit {
  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'name' },
    { field: 'species' },
    { field: 'status' },
  ];

  public pagination: boolean = true;
  public paginationPageSize: number = 10;
  public defaultColDef: ColDef = {
    flex: 1,
    minWidth: 200,
    resizable: true,
    floatingFilter: true,
  };

  public page:number = 1;
  public count:number = 0;
  public next:string = "";
  public prev:string = "";
  public totalPages:number = 0;
  public rowData: any[] = [];


  // For accessing the Grid's API
  @ViewChild(AgGridAngular) agGrid!: AgGridAngular;
  constructor(public rickAndMortyService: RickMortyService) {}

  ngOnInit(): void {}

  onGridReady(params: GridReadyEvent) {
    this.rickAndMortyService.getCharacters().subscribe(rm => {
      this.count = rm.info.count;
      this.next = rm.info.next;
      this.prev = rm.info.prev;
      this.totalPages = rm.info.pages;
      this.rowData = rm.results;
    });
  }

  onCellClicked(e: CellClickedEvent): void {
    console.log('cellClicked', e);
  }

  // Example using Grid's API
  clearSelection(): void {
    this.agGrid.api.deselectAll();
  }
  nextPage() {
    this.rickAndMortyService.getCharactersByPage(this.next).subscribe(rm => {
      this.page++;
      this.count = rm.info.count;
      this.next = rm.info.next;
      this.prev = rm.info.prev;
      this.totalPages = rm.info.pages;
      this.rowData = rm.results;
    })
  }

  previousPage() {
    this.rickAndMortyService.getCharactersByPage(this.prev).subscribe(rm => {
      this.page--;
      this.count = rm.info.count;
      this.next = rm.info.next;
      this.prev = rm.info.prev;
      this.totalPages = rm.info.pages;
      this.rowData = rm.results;
    })
  }


}
