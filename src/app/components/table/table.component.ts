import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  dataSource: any = [];
  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getUsers().subscribe((data) => (this.dataSource = data));
  }

  displayedColumns: string[] = [
    'ID',
    'Name',
    'Username',
    'City',
    'Pincode',
    'Company',
  ];
}
