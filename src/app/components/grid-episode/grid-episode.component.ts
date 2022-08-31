import { Component, OnInit } from '@angular/core';
import { ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';
import { RickMortyService } from 'src/app/services/rick-morty.service';

@Component({
  selector: 'app-grid-episode',
  templateUrl: './grid-episode.component.html',
  styleUrls: ['./grid-episode.component.scss']
})
export class GridEpisodeComponent implements OnInit {

  public columnDefs: ColDef[] = [
    { field: 'name', sortable: true, filter: 'agSetColumnFilter'  },
    { field: 'air_date', sortable: true },
    { field: 'episode', sortable: true },
    { field: "characters" }
  ];

  public rowData$!: any[];

  constructor(public rickAndMortyService: RickMortyService) { }

  ngOnInit(): void {
  }
  onGridReady(params: GridReadyEvent) {
    this.rickAndMortyService.getEpisodes().subscribe((response) => {
      this.rowData$ =  response;
    });
  }
}
