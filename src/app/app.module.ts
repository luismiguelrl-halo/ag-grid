import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { GridEpisodeComponent } from './components/grid-episode/grid-episode.component';
import { RouterModule, Routes } from '@angular/router';
import { GridPaginationFeComponent } from './components/grid-pagination-fe/grid-pagination-fe.component';
import { CustomDateComponent } from './components/custom-date/custom-date.component';

const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'characters', component: GridComponent },
  { path: 'episodes', component: GridEpisodeComponent },
];

@NgModule({
  declarations: [AppComponent, GridComponent, GridPaginationFeComponent, GridEpisodeComponent, CustomDateComponent],
  imports: [BrowserModule, AppRoutingModule, AgGridModule, HttpClientModule],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
