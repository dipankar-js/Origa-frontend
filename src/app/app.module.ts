import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ChartComponent } from './components/chart/chart.component';
import { TableComponent } from './components/table/table.component';
import { UserBoxComponent } from './components/user-box/user-box.component';
import { HttpClientModule } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { DataService } from './services/data.service';

@NgModule({
  declarations: [
    AppComponent,
    ChartComponent,
    TableComponent,
    UserBoxComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NoopAnimationsModule,
    MatTableModule,
    MatCardModule,
  ],
  providers: [DataService],
  bootstrap: [AppComponent],
})
export class AppModule {}
