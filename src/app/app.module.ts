import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { GridEpisodeComponent } from './components/grid-episode/grid-episode.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'characters', component: GridComponent },
  { path: 'episodes', component: GridEpisodeComponent },
];

@NgModule({
  declarations: [AppComponent, GridComponent, GridEpisodeComponent],
  imports: [BrowserModule, AppRoutingModule, AgGridModule, HttpClientModule, RouterModule.forRoot(routes)],
  providers: [],
  exports: [RouterModule],
  bootstrap: [AppComponent],
})
export class AppModule { }
