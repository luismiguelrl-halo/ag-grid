import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatePickerComponent } from './components/shared/date-picker';
import { FormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

const routes: Routes = [
  { path: '', component: GridComponent },
  { path: 'characters', component: GridComponent },
  { path: 'episodes', component: GridEpisodeComponent },
];

@NgModule({
  declarations: [AppComponent, GridComponent, GridPaginationFeComponent, GridEpisodeComponent, CustomDateComponent, MatDatePickerComponent],
  imports: [BrowserModule,
    AppRoutingModule,
    AgGridModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    MatNativeDateModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule],
  providers: [DatePipe],
  exports: [RouterModule],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
